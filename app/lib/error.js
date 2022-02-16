class Err extends Error {

    constructor({ message, code = 500}) {
        super(message)

    // Map the error properties onto this object
        Object.assign(this, { message, code })
    
    // Capture stack trace and remove all frames above constructorOpt from results
        Error.captureStackTrace(this, Err)
    }
}

module.exports = Err
