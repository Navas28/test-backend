const mongoose = require("mongoose");

const varientSchema = new mongoose.Schema({
    ram: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        variants: [varientSchema],
        subcategory: { type: String, required: true },
        description: { type: String },
        images: [{ type: String }],
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
