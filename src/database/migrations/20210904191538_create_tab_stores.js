
const knex = require('knex');

exports.up = function (knex) {
    return knex.schema.createTable('stores', function (table) {
        table.increments('id');
        table.specificType('nome', 'VARCHAR(50)').notNullable().unique();
        table.specificType('cnpj', 'VARCHAR(14)').notNullable().unique();
    }).then(function () {
        console.dir('Tabela stores criada com sucesso!');
    }).catch(function (err) {
        console.log('A tabela não pôde ser criada.');
        console.dir(err);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('stores');
};