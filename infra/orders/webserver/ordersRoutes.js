const { Router } = require('express')
const router = Router()

const listOrdersController = require("../../../interfaces/orders/controllers/list");

router.get("/", listOrdersController);

module.exports = router