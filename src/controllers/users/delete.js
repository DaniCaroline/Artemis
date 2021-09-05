const knex = require("../../database/connection");

const deleteUser = async (req, res) => {
    const {id} = req.params;
    await knex('users').del().where({ id });
    return res.status(200).json({message: 'Registro excluido com sucesso'});  
}

module.exports = deleteUser;