const { db } = require('../../db')

class Names {
    static async fetchGeneratedNames() {
        const results = await db('generated_names')
            .select('*')
        return results
    }

    static async generateName(firstNum, lastNum, nickNum) {
        const firstResults = await db('first_names')
            .select('name')
            .where({id: firstNum})
        const secondResults = await db('last_names')
            .select('name')
            .where({id: lastNum})
        const thirdResults = await db('nick_names')
            .select('name')
            .where({id: nickNum})
        const str = `${firstResults[0].name} '${thirdResults[0].name}' ${secondResults[0].name}`
        const finalResult = await db('generated_names')
            .insert({name: str})
            .returning('*')
        return finalResult
    }
}

module.exports = { Names }