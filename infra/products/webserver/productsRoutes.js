const { Router } = require('express')
const router = Router()

const listProductsController = require("../../../interfaces/products/controllers/list");

router.get("/", listProductsController);

module.exports = router