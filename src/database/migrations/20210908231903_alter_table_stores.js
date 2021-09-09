
exports.up = function (knex) {
  return knex.schema.alterTable('stores', function (table) {
    table.specificType('endereco', 'VARCHAR(255)');
  }).then(function () {
    console.dir('Alteração realizada com sucesso!');
  }).catch(function (err) {
    console.log('A tabela não pôde ser alterada.');
    console.dir(err);
  });
}
exports.down = function (knex) {
  return knex.schema.dropTable('stores');
};
