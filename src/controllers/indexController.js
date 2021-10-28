class IndexController {
  static async indexRender(req, res, next) {
    res.render('index');
  }
}

module.exports = IndexController;
