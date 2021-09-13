const updateUsersApp = require("../../../application/users/update");
const status = require("http-status");

const updateUsers = async (req, res) => {
    const { id } = req.params;
    const {cpf, name, address} = req.body;
    try {
        updateUsersApp({id, cpf, name, address, res})
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = updateUsers;