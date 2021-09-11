// Update with your config settings.

module.exports = {
  development: {
      client: 'mysql2',
      connection: {
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'db_xp'
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
