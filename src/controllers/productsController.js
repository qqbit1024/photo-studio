const { Product, Example, sequelize } = require('../db/models');

class ProductsController {
  static async show(req, res) {
    // рендерит страницу с услугой со всеми примерамиъ
    const productId = req.params.id;

    try {
      const urls = await Product.findOne({
        where: {
          id: productId,
        },
        include: {
          model: Example,
          as: 'forUrl',
        },
      });
      res.json(urls);
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }
}

module.exports = ProductsController;
