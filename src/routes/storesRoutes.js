const { Router } = require('express')
const router = Router()

const listStoresController = require("../controllers/stores/list");

router.get("/", listStoresController);

module.exports = router