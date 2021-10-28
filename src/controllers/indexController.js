const { Product } = require('../db/models');

class IndexController {
  static async indexRender(req, res, next) {
    const products = await Product.findAll();
    const result = products.map((product) => {
      if (product.product_name === 'Гибкий тариф') {
        product.flex = true;
      }
      return product;
    });
    res.render('index', { products });
  }
}

module.exports = IndexController;
