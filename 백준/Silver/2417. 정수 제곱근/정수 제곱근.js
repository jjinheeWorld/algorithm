const fs = require("fs");
const N = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

if (N === 0n) {
  console.log(0);
  process.exit(0);
}

let left = 0n;
let right = N;
let answer = N;

while (left <= right) {
  const mid = (left + right) / 2n;
  const square = mid * mid;

  if (square >= N) {
    answer = mid;
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}

console.log(answer.toString());