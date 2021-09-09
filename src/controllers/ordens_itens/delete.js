const knex = require("../../database/connection");

const deleteOrdensItens = async (req, res) => {
    const {id} = req.params;
    await knex('shoppings_items').del().where({ id });
    return res.status(200).json({message: 'Registro excluido com sucesso'});  
}

module.exports = deleteOrdensItens ;