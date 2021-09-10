const deleteOrdersItemsApp = require("../../../application/orders_items/delete");

const deleteOrdersItems = async (req, res) => {
    const {id} = req.params;
    try {
        deleteOrdersItemsApp({id, res});
        return res.status(200).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = deleteOrdersItems;