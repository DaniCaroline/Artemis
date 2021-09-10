const db = require("../../../infra/database/connection");

const listProductDB = async ({res}) => {
    try{
        const products = await db('products').orderBy('id')
        res.send(products);
    } catch (err){
       res.status(500).send("Error");
    }
}

module.exports = listProductDB;



