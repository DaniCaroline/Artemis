const { Router } = require('express')
const router = Router()

const listStoresController = require("../../../interfaces/stores/controllers/list");

router.get("/", listStoresController);

module.exports = router