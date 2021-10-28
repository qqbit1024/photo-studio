const router = require('express').Router();
const OrdersController = require('../controllers/ordersController');

router.route('/').get().post();

module.exports = router;
