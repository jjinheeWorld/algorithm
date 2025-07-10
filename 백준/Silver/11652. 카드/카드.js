const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map(BigInt);

const sH = new Map();
let max = Number.MIN_SAFE_INTEGER;
let answer = arr[0];

for (let i = 0; i < N; i++) {
  if (sH.has(arr[i])) sH.set(arr[i], sH.get(arr[i]) + 1);
  else sH.set(arr[i], 1);
}

for (let [key, value] of sH) {
  if (value > max) {
    max = value;
    answer = key;
  } else if (value === max) {
    if (key < answer) answer = key;
  }
}

console.log(answer.toString());