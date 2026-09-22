import http from "http";
import { getAllProducts } from "./products.js";

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("METHOD:", req.method);
  if (req.url === "/api/v1/products" && req.method === "GET") {

    const data = getAllProducts();

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        count: data.length,
        data: data
      })
    );

  }
  else if (req.url === "/" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      console.log("Received product:", product);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          msg: "Product added",
          product: product
        })
      );
    });

  }
  else if (
    req.url.startsWith("/products/") &&
    req.method === "PUT"
  ) {

    const productID = req.url.split("/").pop();

    console.log("Update Product ID:", productID);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      product.id = productID;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          msg: "Product updated",
          product: product
        })
      );
    });

  }
  else if (req.url === "/" && req.method === "DELETE") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("DELETE Request");

  }
  else {

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");

    res.end("Request not found");
  }

});

server.listen(5000, () => {
  console.log("PRG6 is running on port 5000");
});