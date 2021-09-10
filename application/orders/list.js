const listOrdersDB = require("../../interfaces/orders/data-access/list");

const listOrders = async ({res}) => {
    listOrdersDB({res}); 
}

module.exports = listOrders;