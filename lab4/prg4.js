import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});

// Get all products
app.get("/api/products", (req, res) => {

    const modiProducts = products.map(
        ({ reviews, description, ...rest }) => rest
    );

    res.status(200).json({
        count: modiProducts.length,
        data: modiProducts
    });
});


// Query String
// Query route must be before dynamic URL /:id
app.get("/api/products/query", (req, res) => {

    const { search, limit, np } = req.query;

    console.log("search:", search);
    console.log("limit:", limit);
    console.log("np:", np);

    // Copy all products
    let sortedProducts = [...products];

    if (np) {
        sortedProducts = sortedProducts.filter(
            (item) => item.price <= Number(np)
        );
    }

    // Search products
    if (search) {
        sortedProducts = sortedProducts.filter(
            (item) =>
                item.name
                    .toLowerCase()
                    .startsWith(search.toLowerCase())
        );
    }

    // Limit products
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // No product found
    if (sortedProducts.length < 1) {

        res.status(200).json({
            data: {},
            msg: "No product matched your search criteria"
        });

    } else {

        // Products found
        res.status(200).json({
            count: sortedProducts.length,
            data: sortedProducts
        });
    }
});


// Get review by product ID and review ID
app.get("/api/products/:id/review/:revid", (req, res) => {

    const { id, revid } = req.params;

    const product = products.find(
        (item) => item.id == Number(id)
    );

    if (!product) {
        res.send(`Product not found with id ${id}`);
        return;
    }

    const review = product.reviews.find(
        (item) => item.id == Number(revid)
    );

    if (!review) {
        res.send(`Review not found with id ${revid}`);
        return;
    }

    res.status(200).json({
        productId: id,
        reviewId: revid,
        data: review
    });
});


// Get product by ID
app.get("/api/products/:id", (req, res) => {

    const { id } = req.params;

    const p = products.find(
        (item) => item.id == Number(id)
    );

    if (p) {

        res.status(200).json({
            status: "found",
            data: p
        });

    } else {

        res.status(404).json({
            status: false,
            msg: `Product not found with id: ${id}`
        });
    }
});


// 404 Route
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});


// Start Server
app.listen(3333, () => {
    console.log("prg4 is running...");
});