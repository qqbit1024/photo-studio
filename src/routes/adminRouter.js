const router = require("express").Router();
// models db
const { Order, Request, Customer, Example, Product, Quantity } = require("../db/models");

router.get("/", async (req, res) => {});

router.get("/orders", async (req, res) => {});

router
  .route("/products")
  .get(async (req, res) => {
    const products = await Product.findAll();
    res.render("admin/product", { products });
  })
  .post(async (req, res) => {
    console.log(req.body);
    const newProduct = await Product.create({ ...req.body });
    res.json(newProduct).status(200);
  });

router
  .route("/products/:id")
  .get(async (req, res) => {
    const editProduct = await Product.findOne({ where: { id: req.params.id } });
    res.render("admin/edit", { editProduct });
  })
  .delete(async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  })
  .put(async (req, res) => {
    const id = req.params.id;
    console.log("AAAAA", id);
    try {
      await Product.update({ ...req.body }, { where: { id } });
      res.sendStatus(200);
    } catch (err) {
      next(err);
      res.sendStatus(500);
    }
  });

router.get("/requests", async (req, res) => {});

router.get("/customers", async (req, res) => {});
module.exports = router;
