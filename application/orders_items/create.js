const createOrdersItemsDB = require("../../interfaces/orders_items/data-access/create");

const createOrdersItems = async ({product_id, orders_id, res}) => {

  createOrdersItemsDB({product_id, orders_id, res});
}

module.exports = createOrdersItems;