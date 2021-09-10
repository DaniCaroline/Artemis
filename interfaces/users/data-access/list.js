const db = require("../../../infra/database/connection");

const listUsersDB = async ({res}) => {
    try{
        const users = await db('users').orderBy('id')
        res.send(users);
    } catch (err){
       res.status(500).send("Error");
    }
}

module.exports = listUsersDB;



