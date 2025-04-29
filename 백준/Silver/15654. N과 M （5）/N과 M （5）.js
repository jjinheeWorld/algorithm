const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

const selected = [];
const visited = Array(n).fill(false);

const answer = [];

const backtracking = (depth) => {
  if (depth === m) {
    answer.push(selected.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = numbers[i];
      backtracking(depth + 1);
      visited[i] = false;
    }
  }
};

backtracking(0);
console.log(answer.join("\n"));
