// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");
const status = require("http-status");

const createUser = async ({name, cpf, address, res}) => {
    try{
        console.log("Inserindo no banco", name)
        await db("users").insert({cpf, name, address});
    } catch (err){
        res.status(status.INTERNAL_SERVER_ERROR).send("Erro na inserção no banco de dados");
    }
}

module.exports = createUser;


