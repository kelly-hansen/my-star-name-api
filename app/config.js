// Ensure proper process.env config BEFORE we utilize config.js (confusing names, I know.)
require('dotenv').config()

// Should load proper config now based on the loaded ENV vars above
const config = require('config')

module.exports = config
