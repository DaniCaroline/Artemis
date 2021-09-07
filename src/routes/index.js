const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const storesRouter = require('./storesRoutes');

const router = Router();

router.use('/users', usersRouter);
router.use('/stores', storesRouter);

module.exports = router;
