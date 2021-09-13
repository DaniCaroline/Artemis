const updateUsersDB = require("../../interfaces/users/data-access/update");
const status = require("http-status");

const updateUsers = async ({id, name, cpf, address, res}) => {
    try {
        // tratamento 

        updateUsersDB({id, name, cpf, address, res});

    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = updateUsers;