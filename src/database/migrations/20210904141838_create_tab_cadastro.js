const knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');
        table.specificType('cpf', 'VARCHAR(11)').notNullable().unique();
        table.specificType('nome', 'VARCHAR(50)').notNullable();
        table.specificType('endereco', 'VARCHAR(50)').notNullable();
    }).then(function () {
        console.dir('Tabela users criada com sucesso!');
    }).catch(function (err) {
        console.log('A tabela não pôde ser criada.');
        console.dir(err);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};