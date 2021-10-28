const router = require("express").Router();
// models db
const { Order, Request, Customer, Example, Product, Quantity } = require("../db/models");

router.get("/", async (req, res) => {});

router.get("/orders", async (req, res) => {});

router.route("/products").get(async (req, res) => {
  const products = await Product.findAll();
  console.log(products);
  res.render("adminProduct", { products });
});

router.get("/requests", async (req, res) => {});

router.get("/customers", async (req, res) => {});
module.exports = router;
