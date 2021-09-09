const { Router } = require('express')
const router = Router()

const listShoppingsController = require("../controllers/shoppings/list");

router.get("/", listShoppingsController);

module.exports = router