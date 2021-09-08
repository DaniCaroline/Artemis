const knex = require('knex');

exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id');
        table.specificType('descricao', 'VARCHAR(50)');
        table.float('valor', 15, 2).notNullable();
        table.specificType('tipo', 'VARCHAR(20)').notNullable();
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
