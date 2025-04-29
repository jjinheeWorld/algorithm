const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

const selected = [];
const answer = [];

const backtracking = (start, depth) => {
  if (depth === m) {
    answer.push(selected.join(" "));
    return;
  }

  for (let i = start; i < n; i++) {
    selected[depth] = numbers[i];
    backtracking(i + 1, depth + 1);
  }
};

backtracking(0, 0);
console.log(answer.join("\n"));
