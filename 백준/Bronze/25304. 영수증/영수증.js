const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalPrice = +input[0];
const itemCount = +input[1];
let calculatedPrice = 0;

for (let i = 2; i <= itemCount + 1; i++) {
  const [itemPrice, itemQuantity] = input[i].split(" ").map((item) => +item);
  calculatedPrice += itemPrice * itemQuantity;
}

console.log(totalPrice === calculatedPrice ? "Yes" : "No");
