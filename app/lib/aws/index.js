const awsSDK = require('aws-sdk')
const config = require('../../config')
const Mailer = require('./mailer')

class AWS {
    constructor () {
        awsSDK.config.update({
            accessKeyId: config.aws.key,
            secretAccessKey: config.aws.secret,
            region: config.aws.region
        })
        this.mailer = this.initMailer()
    }
    initMailer() { return new Mailer(awsSDK, config.emailFrom) }
}

const aws = new AWS()

module.exports = aws.mailer