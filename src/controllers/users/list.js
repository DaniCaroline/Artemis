const knex = require("../../database/connection");

const listUsers = async (_req, res) => {

    const users = await knex('users').orderBy('id');
    res.send(users);
}

module.exports = listUsers;