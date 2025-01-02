import mongoose from "mongoose";
import Product from "../models/product.model";

export const getProducts = async (req, res) => {
    try {

    } catch {

    }
};

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data.
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "please provide all information"})
    }
    const newProduct = new Product(product);
    try {

    } catch {

    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "invalid ID" })
    }
    try {

    } catch {

    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product ID" });
    }
    try {

    } catch {

    }
}
