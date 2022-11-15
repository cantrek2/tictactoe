// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const AWS = require('aws-sdk')
const sns = new AWS.SNS(); //change this to need SMS

const sendMessage = async ({ email, message }) => {
  const params = {
    Message: message,
    Email: email
  }

  return sns.publish(params).promise()
}
//likely needs fixing
sendMessage({ email: process.env.EMAIL, message: 'Sending a message from SNS!'})
  .then(() => console.log('Sent message successfully'))
  .catch((error) => console.log('Error sending SNS: ', error.message))