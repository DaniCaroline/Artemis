const { Router } = require('express')
const usersRoutes = require("./usersRoutes")
const storesRouter = require("./storesRoutes")

const  router = Router ()


router.use('/users', usersRoutes);
router.use('/stores', storesRouter);

module.exports = router