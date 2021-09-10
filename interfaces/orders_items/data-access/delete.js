// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");

const deleteOrdersItemsDB = async ({id, res}) => {
    try{
        await db('orders_items').del().where({ id });
    } catch (err){
       res.status(500).send("Erro na inserção no banco de dados");
    }
}

module.exports = deleteOrdersItemsDB;


