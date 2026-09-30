import { products } from "./data.js";

import express from 'express';

const app = express();






app.get("/home", (req,res)=>{
    res.send(`<h1>home</h1>
        <a href = '/api/products'> Browser products </a>`);
});

app.get("/api/products",(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image,price} = product;
        return {id,name,image,price};
    });
    res.json(newProducts);
});
app.get("/api/products/:productID",(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID));
    if (!singleProduct) {
        return res.status(404).send("Product not found");
    }
    res.json(singleProduct);
});

app.use((req,res)=>{
    res.status(404).send("Route Not Found");
});
app.listen(3333,() => console.log ("prg4 is running..."));