const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
coins.sort((a, b) => b - a);

let min = 0;
coins.forEach((coin) => {
  if (K >= coin) {
    min += Math.floor(K / coin);
    K %= coin;
  }
});

console.log(min);