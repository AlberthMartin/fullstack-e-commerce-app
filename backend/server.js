import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import productRoutes from "./routes/products.route.js"


const app = express()
app.use(express.static('build'))

app.use(express.json()); // allows to accept JSON data in req.body (middleware)

const __dirname = path.resolve();

app.use("/api/products", productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})