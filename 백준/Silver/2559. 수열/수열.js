const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0;
let sum = 0;

for (let i = 0; i < k; i++) answer += arr[i];
sum += answer;

for (let i = k; i < arr.length; i++) {
  answer += arr[i] - arr[i - k];
  sum = Math.max(sum, answer);
}

console.log(sum);
