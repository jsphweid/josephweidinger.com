const s3 = require('s3')
const awscred = require('awscred')

// convert to just using https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-promises.html

class S3Helper {
    constructor(region, profile = 'default', additionalS3ClientConfig = {}) {
        this.s3Client = null
        this.region = region
        this.profile = profile
        this.additionalS3ClientConfig = additionalS3ClientConfig
    }

    getAwsCreds() {
        return new Promise((resolve) => {
            awscred.loadCredentials({ profile: this.profile }, (err, data) => {
                if (err) {
                    console.error('"awscred" could not load your default credentials')
                    throw err
                }
                resolve(data)
            })
        })
    }

    maybeSetUpClient() { // private
        return this.s3Client
            ? new Promise((resolve) => resolve())
            : this.getAwsCreds().then((awsCreds) => {
                const { accessKeyId, secretAccessKey } = awsCreds
                this.s3Client = s3.createClient({
                    maxAsyncS3: 20,
                    s3RetryCount: 3,
                    s3RetryDelay: 1000,
                    multipartUploadThreshold: 20971520,
                    multipartUploadSize: 15728640,
                    s3Options: { accessKeyId, secretAccessKey, region: this.region },
                    ...this.additionalS3ClientConfig,
                })
            }).catch((error) => console.log('Could not get your aws profile from ~/.aws/credentials', error))
    }

    getFilesInBucketRoot(bucket) { // private
        return new Promise((resolve) => {
            let files = []
            const finder = this.s3Client.listObjects({
                s3Params: {
                    Bucket: bucket, 
                    MaxKeys: 1000
                },
                delimiter: '/'
            })
            finder.on('end', (data) => resolve(files))
            finder.on('data', (data) => {
                const rootFolderItems = data.Contents
                    .filter((item) => !item.Key.includes('/'))
                    .map((item) => ({ Key: item.Key }))
                console.log(`adding ${rootFolderItems.length} / ${data.Contents.length} items into return arr`)
                files = [...files, ...rootFolderItems]
            })
        })
    }

    deleteObjects(bucketName, arrOfObjectsToDelete) {
        if (arrOfObjectsToDelete.length === 0) return new Promise((resolve) => resolve())
        const params = {
            Bucket: bucketName, 
            Delete: {
                Objects: arrOfObjectsToDelete, 
                Quiet: false
            }
        }
        return new Promise((resolve) => {
            const deleter = this.s3Client.deleteObjects(params)
            deleter.on('error', (err) => {
                console.error('unable to deleter', err, err.stack)
                throw err
            })
            deleter.on('progress', () => console.log("deleter progress", deleter.progressAmount, deleter.progressTotal))
            deleter.on('end', () => resolve())
        })
    }

    uploadDir(bucketName, localDir, remoteDir, deleteRemoved) { // public
        return this.maybeSetUpClient()
            .then(() => {
                return new Promise((resolve, reject) => {
                    const uploader = this.s3Client.uploadDir({
                        deleteRemoved,
                        localDir,
                        s3Params: {
                            Bucket: bucketName, 
                            Prefix: remoteDir
                        }
                    })
                    uploader.on('error', (err) => console.error("unable to upload / sync:", err.stack))
                    uploader.on('progress', () => console.log("uploading progress", uploader.progressAmount, uploader.progressTotal))
                    uploader.on('end', () => resolve())
                })
            })
            .then(() => console.log('Upload completed successfully.'))
            .catch((error) => console.log('Could not upload dir.', error))
    }

    uploadSafelyToRootDir(bucketName, localDir) { // public
        return this.maybeSetUpClient()
            .then(() => {
                return this.getFilesInBucketRoot(bucketName)    
            }).then((filesInBucketRoot) => {
                console.log(`fetched ${filesInBucketRoot.length} items now preparing to delete...`)
                return this.deleteObjects(bucketName, filesInBucketRoot)
            }).then(() => {
                return this.uploadDir(bucketName, './dist', '', false)
            }).catch((error) => console.log('Something went wrong:', error))
    }

}

const s3Helper = new S3Helper('us-east-1')
s3Helper.uploadSafelyToRootDir('josephweidinger.com', './dist')
