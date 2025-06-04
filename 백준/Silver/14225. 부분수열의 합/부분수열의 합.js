const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const S = input[1].split(" ").map(Number);
S.sort((a, b) => a - b);

let target = 1;

for (let i = 0; i < N; i++) {
  if (target < S[i]) {
    break;
  }
  target += S[i];
}

console.log(target);
