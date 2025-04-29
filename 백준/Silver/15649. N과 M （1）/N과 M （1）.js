const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const selected = [];
const visited = Array(n + 1).fill(false);

const answer = [];

const backtracking = (depth) => {
  if (depth === m) {
    answer.push(selected.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = i;
      backtracking(depth + 1);
      visited[i] = false;
    }
  }
};

backtracking(0);
console.log(answer.join("\n"));
