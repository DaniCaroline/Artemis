const deleteUserApp = require("../../../application/users/delete");
const status = require("http-status");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    deleteUserApp({ id, res });
    return res.status(status.OK).json({ message: "Registro excluido com sucesso" });
  } catch (err) {
    console.log("error", err);
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

module.exports = deleteUser;
