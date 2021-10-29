const { Product, Example, sequelize } = require('../db/models');

class ProductsController {
  static async show(req, res) {
    // рендерит страницу с услугой со всеми примерамиъ
    const productId = req.params.id;

    try {
      const product = await Product.findOne({
        where: {
          id: productId,
        },
        include: {
          model: Example,
          as: 'forUrl',
        },
      });

      res.render('products', { name: product.product_name, firstUrl: product.forUrl[0], urls: product.forUrl.slice(1), desc: product.desc_full })
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }
}

module.exports = ProductsController;
