const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  start--;
  end--;

  basket = [
    ...basket.slice(0, start),
    ...basket.slice(start, end + 1).reverse(),
    ...basket.slice(end + 1),
  ];
}

console.log(basket.join(" "));
