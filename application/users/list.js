const listUserDB = require("../../interfaces/users/data-access/list");

const listUser = async ({res}) => {
    // id não existente 
    listUserDB({res}); 
}

module.exports = listUser;