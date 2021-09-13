const listOrdersApp = require("../../../application/orders/list");
const status = require("http-status");

const listOrders = async (_req, res) => {
    try {
        listOrdersApp({res});
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = listOrders;