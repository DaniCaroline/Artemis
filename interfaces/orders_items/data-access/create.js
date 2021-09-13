// inserir diretamente no banco de dados 
const db = require("../../../infra/database/connection");
const status = require("http-status");

const createOrdersItems = async ({product_id, orders_id, res}) => {
    try{
        const orders = await db("orders_items").insert({orders_id, product_id});
        res.status(status.CREATED).send(orders);
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send("Erro na inserção no banco de dados");
    }
}

module.exports = createOrdersItems;


