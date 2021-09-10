const knex = require('knex');

exports.up = function (knex) {
  return knex.schema.createTable('orders_items', function (table) {
    table.increments('id');
    table.integer('product_id').unsigned().references('id').inTable('products').notNullable().onDelete('CASCADE').unique();
    table.integer('orders_id').unsigned().references('id').inTable('orders').notNullable().onDelete('CASCADE');
  }).then(function () {
    console.dir('Tabela ordens_items criada com sucesso!');
  }).catch(function (err) {
    console.log('A tabela não pôde ser criada.');
    console.dir(err);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders_items');
};
