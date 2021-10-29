const nodemailer = require('nodemailer');
const { send } = require('process');
const { Op } = require('sequelize');
const {
  Customer, Order, Product, OrderProduct, Quantity,
} = require('../db/models');

const sendMail = async function (text, email) {

  let transporter =  nodemailer.createTransport({
    service:'gmail', 
    auth: {
      user: 'tes124444@gmail.com', //тестовы акк
      pass: 'elbrusBOOTCAMP123', // pass
    },
  });
  let info = await transporter.sendMail({
    from: 'tes124444@gmail.com', 
    to: email, 
    subject: "Photo-studio ✔️", 
    text: `Новая заявка: ${text}`, 
    html: `<b>Новая заявка: ${text}</b>`, 
  });
  console.log("Message sent: %s", info.messageId);

}

class OrdersController {
  static async show(req, res) {
    try {
      const products = await Product.findAll({
        where: {
          product_name: {
            [Op.not]: 'Гибкий тариф',
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
      
      const productName = await Product.findOne({where:{id:products[0].id}})
      const text = `
      phone: ${customerInfo.phone}
      name: ${customerInfo.name}
      surname: ${customerInfo.surname}
      total: ${total}
      product: ${productName.product_name } hours:  ${products[0].hours}, camera: ${products[0].equip_count}
      `; 

      await sendMail(text, 'kim__dima@mail.ru')
      console.log('sended');

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  }

}



module.exports = OrdersController;
