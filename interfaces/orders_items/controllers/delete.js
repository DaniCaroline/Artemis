const deleteOrdersItemsApp = require("../../../application/orders_items/delete");
const status = require("http-status");

const deleteOrdersItems = async (req, res) => {
    const {id} = req.params;
    try {
        deleteOrdersItemsApp({id, res});
        return res.status(status.OK).json({message: 'Registro excluido com sucesso'}); 
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = deleteOrdersItems;