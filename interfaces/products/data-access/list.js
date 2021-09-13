const db = require("../../../infra/database/connection");
const status = require("http-status");

const listProductDB = async ({res}) => {
    try{
        const products = await db('products').orderBy('id')
        res.send(products);
    } catch (err){
       res.status(status.INTERNAL_SERVER_ERROR).send("Error");
    }
}

module.exports = listProductDB;



