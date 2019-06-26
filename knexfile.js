// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing.db3'
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    // seeds: {
    //   directory: "./seeds"
    // }
  }

};
