const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let result = "";
for (let i = 0; i < products.length; i++) {
  if (i === products.length - 1) {
    result += (i + 1) + ": " + products[i];
  } else {
    result += (i + 1) + ": " + products[i] + " | ";
  }
}
console.log(result);
