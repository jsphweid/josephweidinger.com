const AWS = require('aws-sdk');
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

const instanceId = 'i-052f6511b46b85593';
const instanceParams = { "InstanceIds": [instanceId] };

function stopInstance(callback) {
    return ec2.stopInstances(instanceParams).promise()
}

exports.handler = function(event, context, callback) {
    return ec2.stopInstances(instanceParams).promise()
};