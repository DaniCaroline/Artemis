const { Router } = require('express')
const router = Router()

const postOrderController = require("../controllers/ordens_itens/create");
const deleteOrderController = require("../controllers/ordens_itens/delete");



router.post("/", postOrderController);
router.delete("/:id", deleteOrderController);


module.exports = router