const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < X; i++) {
  sum += visitors[i];
}

let max = sum;
let count = 1;

for (let i = X; i < N; i++) {
  sum = sum + visitors[i] - visitors[i - X];

  if (sum > max) {
    max = sum;
    count = 1;
  } else if (sum === max) {
    count++;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(count);
}
