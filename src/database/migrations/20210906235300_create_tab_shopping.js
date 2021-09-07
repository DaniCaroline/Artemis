const knex = require('knex');

exports.up = function (knex) {
  return knex.schema.createTable('shopping', function (table) {
    table.increments('id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('realizada').notNullable().defaultTo(true);
    table.boolean('retirada').notNullable().defaultTo(false);
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('store_id').unsigned().references('id').inTable('stores');
  }).then(function () {
    console.dir('Tabela shopping criada com sucesso!');
  }).catch(function (err) {
    console.log('A tabela não pôde ser criada.');
    console.dir(err);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('shopping');
};
