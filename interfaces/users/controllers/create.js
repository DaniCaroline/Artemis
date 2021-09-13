const createUserApp = require("../../../application/users/create");
const status = require("http-status");

const createUser = async (req, res) => {
    const {cpf, name, address} = req.body;
    try {
        createUserApp({cpf, name, address, res})
        res.status(status.CREATED).send("criado");
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = createUser;