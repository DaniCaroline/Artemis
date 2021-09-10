// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");

const updateUsers = async ({id, name, cpf, address, res}) => {
    try{
        const userUpdate = await db('users').update({name, cpf, address}).where({ id });
        return res.status(200).json({data:userUpdate}); 

    } catch (err){
        res.status(500).send("Erro banco de dados");
    }
}

module.exports = updateUsers;


