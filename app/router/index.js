const router = require('./router')
const { db } = require('../db')
const Mailer = require('../lib/aws')
const { asCallBack } = require('../util/helpers')
const Err = require('../lib/error')
const { Names } = require('../components/names')

const letterMap = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7,
    H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
    O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20,
    U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
}

router.get('/healthcheck', async (req, res, next) => {
    res.status(200).send({'Success':'All good'})
})

router.get('/names', async (req, res, next) => {
    const [err, results] = await asCallBack(Names.fetchGeneratedNames())
    if (err) return next(new Err({message: err, code: 500}))
    res.status(200).send(results)
})

router.post('/generate', async (req, res, next) => {
    const { firstName, lastName, number } = req.body
    if (!firstName || !lastName || !number ) {
        res.status(400).send({'error': 'firstName, lastName, and number are required.'})
    }
    
    const [err, results] = await asCallBack(Names.generateName(
        letterMap[firstName[0].toUpperCase()],
        letterMap[lastName[0].toUpperCase()]
        ,number))
    if (err) return next(new Err({message: err, code: 500}))
    res.status(201).send(results[0])
})

router.post('/email', async (req, res, next) => {
    const { email, starName } = req.body
    if (!email || !starName) res.status(400).send({ 'error' : 'email and starName are required' })

    const [err, results] = await asCallBack(Mailer.sesService([email], "You've got a new name", starName))
    if (err) return next(new Err({message: err, code: 500}))
    res.status(201).send({'success': 'Email sent'})
})

module.exports = router