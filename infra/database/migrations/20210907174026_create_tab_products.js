const knex = require('knex');

exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id');
        table.specificType('description', 'VARCHAR(50)');
        table.float('value', 15, 2).notNullable();
        table.specificType('type', 'VARCHAR(20)').notNullable();
    }).then(function () {
        console.dir('Tabela products criada com sucesso!');
    }).catch(function (err) {
        console.log('A tabela não pôde ser criada.');
        console.dir(err);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('products');
};
