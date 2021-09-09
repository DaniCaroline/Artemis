const knex = require("../../database/connection");

const listShoppings = async (_req, res) => {

  const shoppings = await knex('shoppings').orderBy('id');
  res.send(shoppings);
}

module.exports = listShoppings;