const AWS = require('aws-sdk');
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

const headers = { 'Content-Type': 'application/json' }
const base = { headers, isBase64Encoded: false }
function makeErrorResponse(errorMessage) {
    return new Error(errorMessage)
}
function makeOkResponse(data) {
    return Object.assign(base, {
        body: data,
        statusCode: 200
    })
}

const instanceId = 'i-052f6511b46b85593';
const instanceParams = { "InstanceIds": [instanceId] };
const instanceParamsIncludeAll = {
    "InstanceIds": [instanceId],
    "IncludeAllInstances": true
}

function getRunningUrl(callback) {
    return ec2.describeInstances(instanceParams).promise()
        .then(function(data) {
            console.log('-------', data)
            data.Reservations[0].Instances[0].PublicDnsName
            callback(null, makeOkResponse({
                state: 'running',
                liveUrl: data.Reservations[0].Instances[0].PublicDnsName }));
        }).catch(function(error) {
            console.log('error', error)
            callback(makeErrorResponse('I tried to get the live url but failed...' ))
        });
}

function startInstance(callback) {
    return ec2.startInstances(instanceParams).promise()
        .then(function(data) {
            callback(null, makeOkResponse({ data, state: 'pending' }));
        }).catch(function(error) {
            console.log('error', error)
            callback(makeErrorResponse('I tried to start the instance but failed...' ))
        });
}

exports.handler = function(event, context, callback) {

    return ec2.describeInstanceStatus(instanceParamsIncludeAll).promise()
        .then(function(data) {

            if (data && data.InstanceStatuses.length === 0) {
                throw { data, message: 'Could not find instance with that id...' };
            }

            const state = data.InstanceStatuses[0].InstanceState.Name;

            switch (state) {
                case 'pending':
                    return callback(null, makeOkResponse({ state }));
                case 'running':
                    return getRunningUrl(callback);
                case 'stopped':
                    return startInstance(callback);
                default:
                    throw { data, message: 'Not a good time right now...' };
            }

        }).catch(function(error) {
            console.log('---------', error)
            return callback(makeErrorResponse('General error...'));
        });

};