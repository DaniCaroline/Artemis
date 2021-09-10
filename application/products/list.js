const listProductsDB = require("../../interfaces/products/data-access/list");

const listProducts = async ({res}) => {
    // id não existente 
    listProductsDB({res}); 
}

module.exports = listProducts;