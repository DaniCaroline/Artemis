// inserir diretamente no banco de dados
const db = require("../../../infra/database/connection");
const status = require("http-status");

const deleteUserDB = async ({ id, res }) => {
  try {
    await db("users").del().where({ id });
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send("Erro na remoção no banco de dados");
  }
};

module.exports = deleteUserDB;
