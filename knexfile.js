// Update with your config settings.

module.exports = {
  development: {
      client: 'mysql2',
      connection: {
          host: 'localhost',
          user: 'root',
          password: process.env.PASSWORD,
          database: 'db_xp'
      },
      migrations:{
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
      },
      seeds: {
        directory: `${__dirname}/src/database/seeds`
      }      
  }
};
