const knex = require('knex');

exports.up = function (knex) {
  return knex.schema.createTable('shoppings_items', function (table) {
    table.increments('id');
    table.integer('product_id').unsigned().references('id').inTable('products').notNullable().onDelete('CASCADE');
    table.integer('shopping_id').unsigned().references('id').inTable('shoppings').notNullable().onDelete('CASCADE');
  }).then(function () {
    console.dir('Tabela shoppings_items criada com sucesso!');
  }).catch(function (err) {
    console.log('A tabela não pôde ser criada.');
    console.dir(err);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('shoppings_items');
};
