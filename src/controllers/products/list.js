const knex = require("../../database/connection");

const listProducts = async (_req, res) => {

  const products = await knex('products').orderBy('id');
  res.send(products);
}

module.exports = listProducts;