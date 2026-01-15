const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const wordSet = new Set();

for (let i = 1; i <= N; i++) {
  wordSet.add(input[i]);
}

let count = 0;

for (let i = N + 1; i <= N + M; i++) {
  if (wordSet.has(input[i])) count++;
}

console.log(count);
