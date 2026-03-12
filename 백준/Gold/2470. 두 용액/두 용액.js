const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let left = 0;
let right = N - 1;
const solutions = new Map();

while (left < right) {
  const sum = arr[left] + arr[right];
  solutions.set(Math.abs(sum), [arr[left], arr[right]]);
  if (sum > 0) right--;
  else left++;
}

const min = Math.min(...solutions.keys());
console.log(solutions.get(min).join(" "));
