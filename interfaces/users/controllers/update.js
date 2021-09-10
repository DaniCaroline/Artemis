const updateUsersApp = require("../../../application/users/update");

const updateUsers = async (req, res) => {
    const { id } = req.params;
    const {cpf, name, address} = req.body;
    try {
        updateUsersApp({id, cpf, name, address, res})
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = updateUsers;