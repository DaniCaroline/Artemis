const listOrdersApp = require("../../../application/orders/list");

const listOrders = async (req, res) => {
    try {
        listOrdersApp({res});
        //return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = listOrders;