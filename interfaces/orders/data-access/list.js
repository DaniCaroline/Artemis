const db = require("../../../infra/database/connection");

const listOrdersDB = async ({res}) => {
    try{
        const orders = await db('orders').orderBy('id')
        res.send(orders);
    } catch (err){
       res.status(500).send("Error");
    }
}

module.exports = listOrdersDB;



