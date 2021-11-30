const router = require('express').Router();
// models db

const {
  Order, Request, Customer, Example, Product, Quantity,
} = require('../db/models');

router.get('/', async (req, res) => {});

router.get('/orders', async (req, res) => {
  const orders = await Order.findAll({
    include: Customer,
  });

  res.render('admin/order', { orders });
});

router.post('/orders/:id', async (req, res) => {
  const status = await Order.update({ status: true }, { where: { id: req.params.id } });
  res.sendStatus(200);
});

router
  .route('/products')
  .get(async (req, res) => {
    const products = await Product.findAll();
    res.render('admin/product', { products });
  })
  .post(async (req, res) => {
    console.log(req.body);
    const newProduct = await Product.create({ ...req.body });
    res.json(newProduct).status(200);
  });

router
  .route('/products/:id')
  .get(async (req, res) => {
    const editProduct = await Product.findOne({ where: { id: req.params.id } });
    res.render('admin/edit', { editProduct });
  })
  .delete(async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      await Product.update({ ...req.body }, { where: { id } });
      res.sendStatus(200);
    } catch (err) {
      next(err);
      res.sendStatus(500);
    }
  });

router
  .route('/requests')
  .get(async (req, res) => {
    const requests = await Request.findAll({ order: ['createdAt'], include: Product });
    res.render('admin/request', { requests });
  })
  .delete(async (req, res) => {
    await Request.destroy({ where: { id: req.body.id } });
    res.sendStatus(200);
  })
  .patch(async (req, res) => {
    const id = await Request.findOne({ where: { id: req.body.id } });
    const newStatus = await Request.update({ status: !id.status }, { where: { id: id.id } });
    res.json({ status: !id.status });
  })
  .post(async (req, res) => {
    const newRequest = await Request.create({ ...req.body });
    res.redirect('/');
  });

router.get('/customers', async (req, res) => {});

module.exports = router;
