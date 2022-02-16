exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('nick_names').del()
        .then(function () {
            // Inserts seed entries
            return knex('nick_names').insert([
                { id: 1, name: 'Showtime' },
                { id: 2, name: 'The Hammer' },
                { id: 3, name: 'Ace' },
                { id: 4, name: 'Mad Dog' },
                { id: 5, name: 'Flash' },
                { id: 6, name: 'Hollywood' },
                { id: 7, name: 'Lucky' },
                { id: 8, name: 'Skittles' },
                { id: 9, name: 'Slick' },
                { id: 10, name: 'Honey' }
            ])
        })
}