import express from 'express'

const app = express();

// request goes here
app.get("/",(req,res)=>{
    res.send("<h1>Hello EXPRESS</h1>")
})

app.get ("/about",(req,res)=>{
    res.send("<h2>About us page</h2>")
});

const products = [
  {
    id: 1,
    name: "marker",
    qty: 100,
    price: 15,
  },
  {
    id: 2,
    name: "duster",
    qty: 200,
    price: 10,
  },
];

app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
// always listen at last
app.listen(3333,()=>console.log("prg1 is running at 3333"));