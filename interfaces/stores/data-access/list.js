const db = require("../../../infra/database/connection");

const listStoresDB = async ({res}) => {
    try{
        const stores = await db('stores').orderBy('id')
        res.send(stores);
    } catch (err){
       res.status(500).send("Error");
    }
}

module.exports = listStoresDB;



