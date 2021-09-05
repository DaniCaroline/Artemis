const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile['development']);

module.exports = knex;

console.log("banco de dados conectado")