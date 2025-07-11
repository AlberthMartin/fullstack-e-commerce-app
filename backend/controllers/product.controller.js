import Product from "../models/models.product.js"
import mongoose from "mongoose"

export const getProducts = async (req, res)=>{
    try{
        const product = await Product.find({})
            res.status(200).json({success: true, data: product})
        }catch(error){
            console.log("error in fetching products", error.message)
            res.status(500).json({success: false, message: "Server Error"})
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send a req

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product)

    try{
    newProduct.save()
    res.status(201).json({success: true, data: newProduct})
        
    }catch(error){
        console.error("Error in Create Product", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params
    console.log("Deleting", id)
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"})
    }catch(error) {
        console.error("Error in deleting Product", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({success: true, message: "Product updated", data: updatedProduct})
    }catch(error){
        console.error("Error in updating Product", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
    
}
