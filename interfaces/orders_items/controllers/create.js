const createOrdersItemsApp = require("../../../application/orders_items/create");

const createOrdersItems = async (req, res) => {
    const {product_id, orders_id} = req.body;

    try {
        createOrdersItemsApp({product_id, orders_id, res});

    } catch (err ) {
        console.log("error", err);
        res.status(500).send(err)
    }
}

module.exports = createOrdersItems;
