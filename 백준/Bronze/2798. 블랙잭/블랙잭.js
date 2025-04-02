const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      if (m >= sum && max < sum) max = sum;
    }
  }
}

console.log(max);
