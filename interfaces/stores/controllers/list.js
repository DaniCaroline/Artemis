const listStoresApp = require("../../../application/stores/list");

const listStores = async (req, res) => {
    try {
        listStoresApp({res});
        //return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = listStores;