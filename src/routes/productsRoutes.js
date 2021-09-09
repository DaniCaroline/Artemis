const { Router } = require('express')
const router = Router()

const listProductsController = require("../controllers/products/list");

router.get("/", listProductsController);

module.exports = router