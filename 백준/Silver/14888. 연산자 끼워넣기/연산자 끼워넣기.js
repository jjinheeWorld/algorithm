const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);
const answer = [];
let max = -Infinity;
let min = Infinity;

const dfs = (index, current, plus, minus, mul, div) => {
  if (N === index) {
    max = Math.max(max, current);
    min = Math.min(min, current);
    return;
  }

  const next = A[index];

  if (plus > 0) {
    dfs(index + 1, current + next, plus - 1, minus, mul, div);
  }

  if (minus > 0) {
    dfs(index + 1, current - next, plus, minus - 1, mul, div);
  }

  if (mul > 0) {
    dfs(index + 1, current * next, plus, minus, mul - 1, div);
  }

  if (div > 0) {
    const result =
      current < 0
        ? -Math.floor(Math.abs(current) / next)
        : Math.floor(current / next);
    dfs(index + 1, result, plus, minus, mul, div - 1);
  }
};

dfs(1, A[0], operators[0], operators[1], operators[2], operators[3]);

answer.push(max);
answer.push(min);
console.log(answer.join("\n"));
