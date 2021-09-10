// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");

const createUser = async ({name, cpf, address, res}) => {
    try{
        console.log("Inserindo no banco", name)
        await db("users").insert({cpf, name, address});

    } catch (err){
        res.status(500).send("Erro na inserção no banco de dados");
    }
}

module.exports = createUser;


