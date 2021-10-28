const router = require('express').Router();
// models db
const {
  Order, Request, Customer, Example, Product, Quantity,
} = require('../db/models');

router.get('/', async (req, res) => {});

router.get('/orders', async (req, res) => {});

router.get('/products', async (req, res) => {});

router.get('/requests', async (req, res) => {});

router.get('/customers', async (req, res) => {});
module.exports = router;
