const createUserApp = require("../../../application/users/create");

const createUser = async (req, res) => {
    const {cpf, name, address} = req.body;
    try {
        createUserApp({cpf, name, address, res})
        res.status(201).send("criado");
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = createUser;