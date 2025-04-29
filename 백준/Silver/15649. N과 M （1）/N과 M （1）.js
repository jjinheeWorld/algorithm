const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const selected = [];
const visited = Array(n + 1).fill(false);

const backtracking = (depth) => {
  if (depth === m) {
    console.log(selected.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(i);
      backtracking(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
};

backtracking(0);
