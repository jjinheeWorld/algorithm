const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  let [index1, index2] = input[i].split(" ").map(Number);
  let temp = basket[index1 - 1];
  basket[index1 - 1] = basket[index2 - 1];
  basket[index2 - 1] = temp;
}

console.log(basket.join(" "));
