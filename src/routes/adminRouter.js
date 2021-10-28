const router = require('express').Router();
// models db
const {
  Order,
  Request,
  Customer,
  Example,
  Product,
  Quantity,
  sequelize,
} = require('../db/models');

router.get('/', async (req, res) => {});

router.get('/orders', async (req, res) => {
  const orders = await Order.findAll({
    include: Customer,
  });

  res.render('admin/order', { orders });
});

router.post('/orders/:id', async (req, res) => {
  const status = await Order.update(
    { status: true },
    { where: { id: req.params.id } }
  );
  res.sendStatus(200)
});

router.get('/products', async (req, res) => {});

router.get('/requests', async (req, res) => {});

router.get('/customers', async (req, res) => {});

module.exports = router;
