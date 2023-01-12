const Product = require("../models/Product");
const { validationResult } = require("express-validator");
require("dotenv").config();

class productController {
  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
      return;
    } catch (e) {
      res.status(400).json({ message: "Error get users" });
    }
  }

  async getProductById(req, res) {
    try {
      const { _id } = req.body;
      const products = await Product.findOne(_id);
      res.json(products);
      return;
    } catch (e) {
      res.status(400).json({ message: "Error get product" });
    }
  }

  async postProduct(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Error to post", errors });
      }
      const {
        name,
        price,
        isAvailable,
        description,
        category,
        start_date,
        end_date,
        photo,
        owner,
      } = req.body;
      const product = new Product({
        name,
        price,
        isAvailable,
        description,
        category,
        start_date,
        end_date,
        photo,
        owner,
      });
      await product.save();
      return res.json({ message: "Products posted !" });
    } catch (e) {
      res.status(400).json({ message: "Error post product" });
    }
  }
}

module.exports = new productController();
