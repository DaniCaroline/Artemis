// inserir diretamente no banco de dados
const db = require("../../../infra/database/connection");

const deleteUserDB = async ({ id, res }) => {
  try {
    await db("users").del().where({ id });
  } catch (err) {
    res.status(500).send("Erro na remoção no banco de dados");
  }
};

module.exports = deleteUserDB;
