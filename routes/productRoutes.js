const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:id", async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: "Product not fount" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

router.post("/add", async (req, res) => {
    try {
        const { title, variants, subcategory, description, images } = req.body;
        const newProduct = new Product({
            title,
            variants,
            subcategory,
            description,
            images,
        });
        await newProduct.save();
        res.status(201).json({ message: "Product added", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Failed to add product" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                subcategory: req.body.subcategory,
                images: req.body.images
            }, {new: true}
        )
        res.json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: "Failed to update product" });
    }
});

module.exports = router;
