const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "duster", qty: 50, price: 10 }
];

let nextId = 3;

const getAllProducts = () => {
  return products;
};

export { getAllProducts };