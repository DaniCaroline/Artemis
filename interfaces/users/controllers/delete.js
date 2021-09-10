const deleteUserApp = require("../../../application/users/delete");

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        deleteUserApp({id, res});
        return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = deleteUser;