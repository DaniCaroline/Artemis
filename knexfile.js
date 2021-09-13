// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
      client: 'mysql2',
      connection: {
          host: 'localhost',
          user: 'root',
          password: process.env.PASSWORD_MYSQL,
          database: process.env.DATABASE_MYSQL
      },
      migrations:{
        tableName: 'knex_migrations',
        directory: `${__dirname}/infra/database/migrations`
      },
      seeds: {
        directory: `${__dirname}/infra/database/seeds`
      }      
  }
};
