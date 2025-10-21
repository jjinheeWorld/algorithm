const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let N = BigInt(input[0]);
let M = BigInt(input[1]);
let answer = 1n;

for (let i = 1n; i <= M; i++) {
  answer = (answer * (N - i + 1n)) / i;
}

console.log(answer.toString());