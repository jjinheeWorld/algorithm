const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let left = 0;
let right = N - 1;
let bestSum = Infinity;
let answer = [];

while (left < right) {
  const sum = arr[left] + arr[right];

  if (Math.abs(sum) < Math.abs(bestSum)) {
    bestSum = sum;
    answer = `${arr[left]} ${arr[right]}`;
  }

  if (sum > 0) right--;
  else if (sum < 0) left++;
  else break;
}

console.log(answer);