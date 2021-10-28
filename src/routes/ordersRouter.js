const router = require('express').Router();
const OrdersController = require('../controllers/ordersController');

router.route('/')
  .get(OrdersController.show)
  .post(OrdersController.createOrder);

module.exports = router;
