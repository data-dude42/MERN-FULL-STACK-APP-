// import mongoose from "mongoose";
// import Product from "../models/product.model";

// export const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({ success: true, data: products });
//     } catch (error) {
//         console.log("error in fetching products:", error.message)
//         res.status(500).json({ success: false, message: "Error fetching products" });
//     }
// };

// export const createProduct = async (req, res) => {
//     const product = req.body; // user will send this data.
//     if (!product.name || !product.price || !product.image) {
//         return res.status(400).json({ success: false, message: "please provide all information" })
//     }
//     const newProduct = new Product(product);
//     try {
//         await newProduct.save();
//         res.status(201).json({ success: true, data: newProduct });
//     } catch (error) {
//         console.log("error in fetching products:", error.message);
//         res.status(500).json({ success: false, message: "server error" });
//     }
// };

// export const updateProduct = async (req, res) => {
//     const { id } = req.params;
//     const product = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ success: false, message: "invalid ID" })
//     }
//     try {
//         const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true });
//         res.status(200).json({ success: true, data: updatedProduct });
//     } catch (error) {
//         console.log("error in updating products:", error.message);
//         res.status(500).json({ success: false, message: "server error" });
//     }
// };

// export const deleteProduct = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Product ID" });
//     }
//     try {
//         const deleteProduct = await Product.findByIdAndDelete(id);
//         res.status(200).json({ success: true, data: deleteProduct });
//     } catch (error) {
//         console.log("error in deleting products:", error.message);
//         res.status(500).json({ success: false, message: "server error" });
//     }
// };
import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
};

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data.
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide all information" });
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("error in creating product:", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "invalid ID" });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.log("error in updating product:", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product ID" });
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: deletedProduct });
    } catch (error) {
        console.log("error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
};

