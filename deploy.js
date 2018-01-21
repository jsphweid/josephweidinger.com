const s3 = require('s3')
const awscred = require('awscred')

const bucketName = 'josephweidinger.com'

function s3ClientCreator(accessKeyId, secretAccessKey, region) {
    const clientConfig = {
        maxAsyncS3: 20,     // this is the default
        s3RetryCount: 3,    // this is the default
        s3RetryDelay: 1000, // this is the default
        multipartUploadThreshold: 20971520, // this is the default (20 MB)
        multipartUploadSize: 15728640, // this is the default (15 MB)
        s3Options: {
            accessKeyId,
            secretAccessKey,
            region
            // endpoint: 's3.yourdomain.com',
            // sslEnabled: false
            // any other options are passed to new AWS.S3()
            // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
        }
    }

    return s3.createClient(clientConfig)
}

function getContentsOfBucket(s3Client, bucket) {
    const params = {
        s3Params: {
            Bucket: bucket, 
            MaxKeys: 1000
        },
        delimiter: '/'
    }
    return new Promise((resolve) => {
        const finder = s3Client.listObjects(params)
        let files = []
        finder.on('data', (data) => {
            const rootFolderItems = data.Contents
                .filter((item) => !item.Key.includes('/'))
                .map((item) => ({ Key: item.Key }))
            console.log(`adding ${rootFolderItems.length} / ${data.Contents.length} items into return arr`)
            files = [...files, ...rootFolderItems]
        })

        finder.on('end', (data) => {
            resolve(files)
        })
    })
}

function uploadDir(s3Client, localDir, remoteDir, deleteRemoved = false) {
    const params = {
        deleteRemoved,
        localDir,
        s3Params: {
            Bucket: bucketName, 
            Prefix: remoteDir
        }
    }
    
    return new Promise((resolve, reject) => {
        var uploader = s3Client.uploadDir(params);
        uploader.on('error', (err) => {
            console.error("unable to upload / sync:", err.stack)
        })
        uploader.on('progress', () => {
            console.log("uploading progress", uploader.progressAmount, uploader.progressTotal)
        })
        uploader.on('end', () => {
            resolve()
        })
    })
}

function deleteObjects(s3Client, arrOfObjectsToDelete) {
    if (arrOfObjectsToDelete.length === 0) return new Promise((resolve) => resolve())
    const params = {
        Bucket: bucketName, 
        Delete: {
            Objects: arrOfObjectsToDelete, 
            Quiet: false
        }
    }
    return new Promise((resolve) => {
        const deleter = s3Client.deleteObjects(params)
        deleter.on('error', (err) => {
            console.error('unable to deleter', err, err.stack)
            throw err
        })
        deleter.on('progress', () => {
            console.log("deleter progress", deleter.progressAmount, deleter.progressTotal)
        })
        deleter.on('end', () => {
            resolve()
        })

    })
}

function getAwsCreds() {
    return new Promise((resolve) => {
        awscred.load({ profile: 'default' }, (err, data) => {
            if (err) {
                console.error('"awscred" could not load your default credentials')
                throw err
            }
            resolve(data)
        })
    })
}

let s3Client = null

getAwsCreds()
    .then((data) => {
        
        const { region, credentials: { accessKeyId, secretAccessKey } } = data
        s3Client = s3ClientCreator(accessKeyId, secretAccessKey, region)
        return getContentsOfBucket(s3Client, 'josephweidinger.com')

    }).then((itemsToDelete) => {

        console.log(`fetched ${itemsToDelete.length} items now preparing to delete...`)
        return deleteObjects(s3Client, itemsToDelete)

    }).then(() => {

        return uploadDir(s3Client, './dist/artifacts', '')

    }).then(() => console.log('completed successfully')
    ).catch((error) => console.error('-error', error))
