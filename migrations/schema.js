exports.up = (knex, Promise) => {
    return knex.raw(`
        CREATE TABLE IF NOT EXISTS first_names (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50)
        );

        CREATE TABLE IF NOT EXISTS last_names (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50)
        );

        CREATE TABLE IF NOT EXISTS nick_names (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50)
        );

        CREATE TABLE IF NOT EXISTS generated_names (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            created_at TIMESTAMPTZ DEFAULT current_timestamp
        );
    `)
}
  
exports.down = (knex, Promise) => {
    return knex.raw(`
      DROP TABLE IF EXISTS first_names;
      DROP TABLE IF EXISTS last_names;
      DROP TABLE IF EXISTS nick_names;
      DROP TABLE IF EXISTS generated_names;
    `)
}
  