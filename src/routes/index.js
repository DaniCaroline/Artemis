const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const storesRouter = require('./storesRoutes');
const shoppingsRouter = require('./shoppingsRoutes');
const productsRouter = require('./productsRoutes');
const ordersRouter = require('./ordersRoutes');



const router = Router();

router.use('/users', usersRouter);
router.use('/stores', storesRouter);
router.use('/shoppings', shoppingsRouter);
router.use('/products', productsRouter);
router.use('/orders',ordersRouter);




module.exports = router;
