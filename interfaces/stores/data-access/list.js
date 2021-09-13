const db = require("../../../infra/database/connection");
const status = require("http-status");

const listStoresDB = async ({res}) => {
    try{
        const stores = await db('stores').orderBy('id')
        res.send(stores);
    } catch (err){
       res.status(status.INTERNAL_SERVER_ERROR).send("Error");
    }
}

module.exports = listStoresDB;



