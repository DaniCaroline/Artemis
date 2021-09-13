const listUsersApp = require("../../../application/users/list");
const status = require("http-status");

const listUsers = async (_req, res) => {
    try {
        listUsersApp({res});
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = listUsers;