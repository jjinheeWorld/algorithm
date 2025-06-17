const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const times = input[1].split(" ").map(Number);
times.sort((a, b) => a - b);

let total = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += times[i];
  total += sum;
}

console.log(total);
