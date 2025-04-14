const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input[0];
const answer = [];

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function getSum(arr, n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      sum += gcd(arr[i], arr[j]);
    }
  }
  return sum;
}

for (let i = 1; i <= t; i++) {
  const arr = input[i].split(" ").map(Number);
  const n = arr[0];
  answer.push(getSum(arr, n));
}

console.log(answer.join("\n"));
