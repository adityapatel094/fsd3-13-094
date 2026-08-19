import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";

import { stdin, stdout } from "process";

const FILE = "products.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();
  products.push(item);
  await saveCart(products);
};
const showCart =  () => {
  console.log("showcart:");

};
const updateCart = () => {
    console.log(updateCart);
}
const deleteFromcart = ()=>{
    console.log(deleteFromcart);
}

const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("Welcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        let data = await cin.question("enter id,name,price,qty:");
                let p = data.split(",");
                console.table(p);
                let q = p.map((item)=>item.trim());
                let [id,name,price,qty] = q;
                console.log(id,name,price,qty);
                const product = {
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                }
                //console.log(product);
                await addToCart(product);
                    
        break;
      case 2:
        showCart();
        break;
      case 3:
        deleteFromcart();
        break;
      case 4:
        updateCart();
        break;
      case 5:
        console.log("See you later...😃");
        process.exit();
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != "5");

  cin.close();
};

main();