const knex = require("../../database/connection");

const createUser = async (req, res) => {
    try {
        if(req.body.cpf?.length > 11){
            res.status(500).send("erro no tamanho do cpf")
            return;
        } 

        await knex("users").insert(req.body);
        res.status(201).send("criado");

    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = createUser;