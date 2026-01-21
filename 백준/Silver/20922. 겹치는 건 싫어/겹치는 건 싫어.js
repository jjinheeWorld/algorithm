const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const sH = new Map();
let max = Number.MIN_SAFE_INTEGER;
let left = 0;

for (let right = 0; right < N; right++) {
  const x = arr[right];
  if (!sH.has(x)) sH.set(x, 1);
  else sH.set(x, sH.get(x) + 1);

  while (sH.get(x) > K) {
    const y = arr[left];
    sH.set(y, sH.get(y) - 1);
    left++;
  }

  const len = right - left + 1;
  if (len > max) max = len;
}

console.log(max);