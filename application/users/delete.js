const deleteUserDB = require("../../interfaces/users/data-access/delete");

const deleteUser = async ({id, res}) => {
    // id não existente 

    deleteUserDB({id});
    //return res.status(200).json({message: 'Registro excluido com sucesso'});  
}

module.exports = deleteUser;