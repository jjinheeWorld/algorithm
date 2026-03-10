const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);

arr.sort((a, b) => a - b);
let count = 0;

for (let left = 0; left < n; left++) {
  let right = n - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === x) {
      count++;
      break;
    } else {
      right--;
    }
  }
}

console.log(count);