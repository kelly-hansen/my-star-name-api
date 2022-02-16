exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('last_names').del()
        .then(function () {
            // Inserts seed entries
            return knex('last_names').insert([
                { id: 1, name: 'Affleck' },
                { id: 2, name: 'Beckham' },
                { id: 3, name: 'Cruise' },
                { id: 4, name: 'De Niro' },
                { id: 5, name: 'Eastwood' },
                { id: 6, name: 'Freeman' },
                { id: 7, name: 'Gyllenhaal' },
                { id: 8, name: 'Hilton' },
                { id: 9, name: 'Idol' },
                { id: 10, name: 'Jackson' },
                { id: 11, name: 'Kardashian' },
                { id: 12, name: 'Latifah' },
                { id: 13, name: 'Maguire' },
                { id: 14, name: 'Nicholson' },
                { id: 15, name: "O'Brien" },
                { id: 16, name: 'Pacino' },
                { id: 17, name: 'Quinn' },
                { id: 18, name: 'Reynolds' },
                { id: 19, name: 'Seacrest' },
                { id: 20, name: 'Timberlake' },
                { id: 21, name: 'Underwood' },
                { id: 22, name: 'Vaughn' },
                { id: 23, name: 'Wahlberg' },
                { id: 24, name: 'Xavier' },
                { id: 25, name: 'Yankovic' },
                { id: 26, name: 'Zuckerberg' }
            ])
        })
}