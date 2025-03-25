const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const basket = Array.from({ length: n }, () => 0);

for (let i = 1; i <= m; i++) {
  const [start, end, value] = input[i].split(" ").map(Number);
  basket.fill(value, start - 1, end);
}

console.log(basket.join(" "));