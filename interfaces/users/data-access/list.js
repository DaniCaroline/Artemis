const db = require("../../../infra/database/connection");
const status = require("http-status");

const listUsersDB = async ({res}) => {
    try{
        const users = await db('users').orderBy('id')
        res.send(users);
    } catch (err){
       res.status(status.INTERNAL_SERVER_ERROR).send("Error");
    }
}

module.exports = listUsersDB;



