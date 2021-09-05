const knex = require("../../database/connection");

const updateUser = async (req, res) => {
    const { id } = req.params;
    const {nome, cpf} = req.body;    

    const data = {cpf, nome};

    await knex('users').update(data).where({ id });

    const cadastro = await knex('users').update(data).where({id});

    return res.status(200).json({data:cadastro});       
}

module.exports = updateUser;