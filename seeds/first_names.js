exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('first_names').del()
        .then(function () {
            // Inserts seed entries
            return knex('first_names').insert([
                { id: 1, name: 'Adele' },
                { id: 2, name: 'Beyonce' },
                { id: 3, name: 'Cameron' },
                { id: 4, name: 'Demi' },
                { id: 5, name: 'Emmanuel' },
                { id: 6, name: 'Fergie' },
                { id: 7, name: 'Gerard' },
                { id: 8, name: 'Hayden' },
                { id: 9, name: 'Isla' },
                { id: 10, name: 'Jaden' },
                { id: 11, name: 'Keanu' },
                { id: 12, name: 'Leonardo' },
                { id: 13, name: 'Mick' },
                { id: 14, name: 'Nelly' },
                { id: 15, name: 'Orlando' },
                { id: 16, name: 'Pierce' },
                { id: 17, name: 'Quentin' },
                { id: 18, name: 'Rihanna' },
                { id: 19, name: 'Shia' },
                { id: 20, name: 'Tyra' },
                { id: 21, name: 'Uma' },
                { id: 22, name: 'Venus' },
                { id: 23, name: 'Winona' },
                { id: 24, name: 'Xzibit' },
                { id: 25, name: 'Yvonna' },
                { id: 26, name: 'Zoe' },
            ])
        })
}