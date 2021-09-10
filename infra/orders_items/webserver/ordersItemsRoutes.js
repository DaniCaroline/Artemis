const { Router } = require('express')
const router = Router()

const postOrderController = require("../../../interfaces/orders_items/controllers/create");
const deleteOrderController = require("../../../interfaces/orders_items/controllers/delete");

router.post("/", postOrderController);
router.delete("/:id", deleteOrderController);


module.exports = router