const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const positions = input[1].split(" ").map(Number);

const diffs = positions.map((pos) => Math.abs(s - pos));

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

let answer = diffs[0];
for (let i = 1; i < n; i++) {
  answer = gcd(answer, diffs[i]);
}

console.log(answer);
