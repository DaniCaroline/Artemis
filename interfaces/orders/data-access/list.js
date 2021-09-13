const db = require("../../../infra/database/connection");
const status = require("http-status");

const listOrdersDB = async ({res}) => {
    try{
        const orders = await db('orders').orderBy('id')
        res.send(orders);
    } catch (err){
       res.status(status.INTERNAL_SERVER_ERROR).send("Error");
    }
}

module.exports = listOrdersDB;



