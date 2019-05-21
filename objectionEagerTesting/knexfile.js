/*https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556#knex*/

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/example_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

 
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  },
};
