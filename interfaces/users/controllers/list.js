const listUsersApp = require("../../../application/users/list");

const listUsers = async (req, res) => {
    try {
        listUsersApp({res});
        //return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = listUsers;