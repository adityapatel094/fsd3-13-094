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

// query string /request query be before req parameters or dynamic url
app.get("/api/products/query",(req,res)=>{

    const {search,limit,mp} = req.query;
    console.log("search:",search);
    console.log("limit:",limit);

    let sortedProducts = [...products] // copy all products

    if(mp) {
        sortedProducts = sortedProducts.filter(
            (item)=>item.price<= Number(mp)
        );
    }

    if (search) {
        sortedProducts = sortedProducts.filter((item)=>
            item.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()));
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        res
        .status(200)
        .json({"data":[],msg:"no products matched your search criteria"});
    }
    else{
        res
        .status(200)
        .json({count:sortedProducts.length,data:sortedProducts});
    }

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