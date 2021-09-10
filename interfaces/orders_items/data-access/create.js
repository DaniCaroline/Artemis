// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");

const createOrdersItems = async ({product_id, orders_id, res}) => {
    //console.log(product_id, orders_id);
    // const orders_id = 7;
    try{
        const orders = await db("orders_items").insert({orders_id, product_id});
        res.status(201).send(orders);
    } catch (err){
        res.status(500).send("Erro na inserção no banco de dados");
    }
}

module.exports = createOrdersItems;


