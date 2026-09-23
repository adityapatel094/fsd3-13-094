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

let nextId = 3;

export const getAllProducts = () => {
  return products;
};

export const addProduct = (item) => {
  item.id = nextId;
  nextId++;

  products.push(item);

  return item;
};

export const deleteProduct = (pid) => {
  const index = products.findIndex((prd) => prd.id === pid);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);

  console.log("Products remaining:", products);

  return true;
};

export const getProductById = (pid) => {
  return products.find((prd) => prd.id === pid);
};

export const updateProduct = (pid, updatedProduct) => {
  const index = products.findIndex(
    (prd) => prd.id === Number(pid)
  );

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    ...updatedProduct,
    id: Number(pid),
  };

  return products[index];
};