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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Error to post", errors });
    }
    const {
      name,
      price,
      localisation,
      owner,
      isAvailable,
      description,
      category,
      renting_date,
      photo,
    } = req.body;
    const product = new Product({
      name,
      price,
      localisation,
      owner: req.user.username,
      isAvailable: true,
      description,
      category,
      photo,
    });
    await product.save();
    return res.json({ message: "Products posted !" });
  }

  async rentProduct(req, res) {
    const userId = req.user.id;
    const productId = req.params.id;
    const date = new Date(req.body.date);
    console.log(userId, productId, date);
    const product = await Product.findById(productId);
    product.rentings.push({
      renter_id : userId,
      date: date,
    });
    product.save();
    res.sendStatus(201)    
  }
}

module.exports = new productController();
