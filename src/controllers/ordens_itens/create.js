const knex = require("../../database/connection");

const createOrdensList = async (req, res) => {
  try {
      
      await knex("shoppings_items").insert(req.body);
      res.status(201).send("criado");

  } catch (err ) {
      console.log("error", err);
      res.status(500).send(err)
  }
}

module.exports = createOrdensList;