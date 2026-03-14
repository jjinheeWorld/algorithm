const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let minLength = Number.MAX_SAFE_INTEGER;
let sum = 0;

for (let right = 0; right < N; right++) {
  sum += arr[right];
  while (sum >= S) {
    minLength = Math.min(minLength, right - left + 1);
    sum -= arr[left];
    left++;
  }
}

console.log(minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength);
