const config = require('../config')
const dbConfig = config.db.myStarName
const knex = require('knex')(dbConfig)
const argv = require('yargs').argv

const safeEnvs = { localdev: true }

// Helper function so we know its safe to do scary things to the db
function checkIfSafeEnvironment () {
    let safe = false
    // Check if we are in a safe environment
    console.log('config.NODE_ENV: ', config.NODE_ENV)
    if (safeEnvs[config.NODE_ENV]) safe = true

    if (dbConfig.connection.host !== 'localhost') safe = false
  
    if (!safe) {
      console.error('You attempted to wipe db for unit tests in a non-safe scenario (wrong db host or environment)!!!')
      process.exit(1)
    }
    return safe
}
  
class DB {
    constructor () {
        this.db = knex
    }

    async connected () {
        console.log(`DB connected on PORT: ${dbConfig.connection.port}`)
        return knex.raw(`SELECT 1 as dbUp`)
    }

    async dropAllTables () {
        // Do NOT drop all tables unless we are in localdev
        checkIfSafeEnvironment()
        // Select all tables to drop
        const allTables = await knex.select().from('information_schema.tables').where({ 'table_schema': 'public' })
    
        // Note: This will also delete knex_migrations/knex_migrations_lock as well
        await Promise.all(allTables.map(async table => {
          await knex.schema.dropTableIfExists(table.table_name)
        }))
      }
    
    async migrateLatest () {
        return knex.migrate.latest({
            directory: './migrations/'
        })
    }
}

const db = new DB();


(async function main () {
    // called directly (i.e. from command line/terminal)
    if (require.main === module) {
       if (argv.droptables) await db.dropAllTables()
       process.exit(0)
    }
})()
  
module.exports = db