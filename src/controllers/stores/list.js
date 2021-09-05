const knex = require("../../database/connection");

const listStores = async (_req, res) => {

    const stores = await knex('stores').orderBy('id');
    res.send(stores);
}

module.exports = listStores;