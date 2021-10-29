const router = require("express").Router();

const { Order, Request, Customer, Example, Product, Quantity } = require("../db/models");

router.route("/").get(async (req, res) => {
  const products = await Product.findAll({ order: ["createdAt"] });
  res.render("partials/requestform", { products });
});

module.exports = router;
