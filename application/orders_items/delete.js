const deleteOrdersItemsDB = require("../../interfaces/orders_items/data-access/delete");

const deleteOrdersItems = async ({id, res}) => {
    // id não existente 

    deleteOrdersItemsDB({id}); 
}

module.exports = deleteOrdersItems;