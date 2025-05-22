const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  availability: {
    type: String,
    enum: ["in stock", "out of stock"],
    default: "in stock",
  },
  ram: {
    type: [String], // array of strings
    enum: ["4GB", "8GB", "16GB"],
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
