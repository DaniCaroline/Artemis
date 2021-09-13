const createOrdersItemsApp = require("../../../application/orders_items/create");
const status = require("http-status");

const createOrdersItems = async (req, res) => {
    const {product_id, orders_id} = req.body;

    try {
        createOrdersItemsApp({product_id, orders_id, res});

    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = createOrdersItems;
