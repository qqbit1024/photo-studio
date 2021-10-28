const router = require("express").Router();
const ProductsController = require("../controllers/productsController");

router.route("/").get((req, res) => {
  res.redirect("/");
});

router.route("/:id").get(ProductsController.show);

module.exports = router;
