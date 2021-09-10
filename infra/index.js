const { Router } = require('express');
const usersRouter = require('./users/webserver/usersRoutes');
const storesRouter = require('./stores/webserver/storesRoutes');
const ordersRouter = require('./orders/webserver/ordersRoutes');
const productsRouter = require('./products/webserver/productsRoutes');
const ordersItemsRouter = require('./orders_items/webserver/ordersItemsRoutes');

const router = Router();

router.use('/users', usersRouter);
router.use('/stores', storesRouter);
router.use('/orders', ordersRouter);
router.use('/products', productsRouter);
router.use('/ordersItems',ordersItemsRouter);

module.exports = router;
