const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const xMap = new Map();
const yMap = new Map();

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  if (xMap.has(x)) xMap.set(x, xMap.get(x) + 1);
  else xMap.set(x, 1);

  if (yMap.has(y)) yMap.set(y, yMap.get(y) + 1);
  else yMap.set(y, 1);
}

let count = 0;

for (let value of xMap.values()) {
  if (value >= 2) count++;
}

for (let value of yMap.values()) {
  if (value >= 2) count++;
}

console.log(count);
