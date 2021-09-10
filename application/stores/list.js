const listStoresDB = require("../../interfaces/stores/data-access/list");

const listStores = async ({res}) => {
    // id não existente 
    listStoresDB({res}); 
}

module.exports = listStores;