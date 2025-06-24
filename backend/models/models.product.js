//43,23
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.set("strictQuery", false)

const url = process.env.MONGODB_URI

console.log("Connecting to", url)
  
mongoose.connect(url)
    .then(result =>{
        console.log("connected to MongoDB")
    })
    .catch(error=>{
        console.log("error connection to MongoDB", error.message)
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt updatedAt
});

const Product = mongoose.model("Product", productSchema);
export default Product;