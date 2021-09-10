const updateUsersDB = require("../../interfaces/users/data-access/update");

const updateUsers = async ({id, name, cpf, address, res}) => {
    try {
        // tratamento 

        updateUsersDB({id, name, cpf, address, res});

    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = updateUsers;