const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const a = input[1].split(" ").map(Number);

const selected = [];
const visited = Array(n).fill(false);
let max = Number.MIN_SAFE_INTEGER;

const CalcSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

const backtracking = (depth) => {
  if (depth === n) {
    const sum = CalcSum(selected);
    max = Math.max(max, sum);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = a[i];
      backtracking(depth + 1);
      visited[i] = false;
    }
  }
};

backtracking(0);
console.log(max);
