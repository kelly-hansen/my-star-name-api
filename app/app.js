const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db')
const routes = require('./router')
const config = require('./config')

class Application {
    constructor () {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true}))
        app.use(helmet())
        app.use(cors({ exposedHeaders: ['Content-Disposition'] }))
        app.use(morgan('dev'))
        app.use('/api', routes)

        this.app = app
    }

    async start (port, migration, done) {
        process.on('uncaughtException', (e) => {
            console.error('Top-Level exception', e, e.stack)
        })

        // STARTUP ACTIONS
        await db.connected()

        return new Promise((resolve, reject) => {
            app.listen(port, async (err) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                console.info(`Server now listening on port: ${port}`)
                resolve()
            })
        })
    }
}

const APP = new Application();

(async function main () {
    // called directly (i.e. from command line/terminal)
    if (require.main === module) {
      let port = config.port
      await APP.start(port || 8080)
    }
})()

module.exports = APP.app