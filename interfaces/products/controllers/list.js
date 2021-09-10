const listProductApp = require("../../../application/products/list");

const listProducts = async (req, res) => {
    try {
        listProductApp({res});
        //return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = listProducts;