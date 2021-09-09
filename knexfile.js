// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
      client: 'mysql2',
      connection: {
          host: 'localhost',
          user: 'root',
          password: process.env.PASSWORD_MYSQL,
          database: 'ecommerce'
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
