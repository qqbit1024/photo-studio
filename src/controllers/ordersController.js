const { Op } = require('sequelize');
const {
  Customer, Order, Product, OrderProduct, Quantity,
} = require('../db/models');

class OrdersController {
  static async show(req, res) {
    try {
      const products = await Product.findAll({
        where: {
          product_name: {
            [Op.not]: 'photo3',
          },
        },
      });
      res.render('order', { products });
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }

  static async createOrder(req, res) {
    const customerId = req.session.user.id;
    const { customerInfo, products, total } = req.body;
    // check user
    try {
      const currentCustomer = await Customer.findOne({
        where: {
          id: customerId,
        },
      });
      if (!currentCustomer.name) {
        currentCustomer.name = customerInfo.name;
        currentCustomer.surname = customerInfo.surname;
        currentCustomer.email = customerInfo.email;
        currentCustomer.phone = customerInfo.phone;
        await currentCustomer.save();
      }

      // create order
      const newOrder = await Order.create({ customer_id: customerId, total });
      const orderId = newOrder.id;

      // create OrderProduct Quantity
      products.forEach(async (product) => {
        console.log('asdfasdf');
        await OrderProduct.create({
          order_id: orderId,
          product_id: product.id,
        });
        await Quantity.create({
          order_id: orderId,
          product_id: product.id,
          hours: product.hours,
          equip_count: product.equip_count,
        });
      });

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  }
}

module.exports = OrdersController;
