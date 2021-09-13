const listStoresApp = require("../../../application/stores/list");
const status = require("http-status");

const listStores = async (_req, res) => {
    try {
        listStoresApp({res});
    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = listStores;