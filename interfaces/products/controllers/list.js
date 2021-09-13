const listProductApp = require("../../../application/products/list");
const status = require("http-status");

const listProducts = async (_req, res) => {
    try {
        listProductApp({res});
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = listProducts;