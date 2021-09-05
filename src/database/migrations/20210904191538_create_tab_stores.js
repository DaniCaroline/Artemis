
const knex = require('knex');

exports.up = function(knex) {
     return knex.schema.createTable('stores', function(table){
        table.increments('id');
        table.specificType('nome', 'VARCHAR(50)').notNullable().unique();
        table.specificType('cnpj', 'VARCHAR(14)').notNullable().unique();
        table.specificType('endereco', 'VARCHAR(50)').notNullable();
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('stores');
};