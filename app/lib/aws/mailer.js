const awsSDK = require('aws-sdk')
const config = require('../../config')

class Mailer {
    constructor (aws = awsSDK, sourceAddress) {
        this.ses = new aws.SES({ region: 'us-west-1' })
        this.sourceAddress = sourceAddress
    }

    async sesService(recipients, subject, body) {
        const params = {
            Destination: { ToAddresses: recipients },
            Message: {
                Subject: { Charset: 'UTF-8', Data: subject },
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: body
                    }
                }
            },
            Source: this.sourceAddress
        }
        const result = await this.ses.sendEmail(params).promise()
        if (config.NODE_ENV !== 'production') console.log('Email sent: ', result)
    }
}

module.exports = Mailer