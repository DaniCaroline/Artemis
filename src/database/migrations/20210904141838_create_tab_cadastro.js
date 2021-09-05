const knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');
        table.specificType('cpf', 'VARCHAR(11)').notNullable().unique();
        table.specificType('nome', 'VARCHAR(50)').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
