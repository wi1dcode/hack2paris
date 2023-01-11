const { Schema, model } = require("mongoose");

// model of user

const Product = new Schema(
  {
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    photo: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Product", Product);
