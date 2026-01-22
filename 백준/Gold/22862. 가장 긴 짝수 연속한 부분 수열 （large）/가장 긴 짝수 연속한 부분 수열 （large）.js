const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let oddCount = 0;
let max = Number.MIN_SAFE_INTEGER;

for (let right = 0; right < N; right++) {
  if (arr[right] % 2 !== 0) oddCount++;

  while (oddCount > K) {
    if (arr[left] % 2 !== 0) oddCount--;
    left++;
  }

  const len = right - left + 1;
  const evenCount = len - oddCount;
  if (max < evenCount) max = evenCount;
}

console.log(max);