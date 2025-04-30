const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const selected = [];
const visited = Array(n + 1).fill(false);
let answer = "";

const backtraking = (depth) => {
  if (depth === n) {
    answer += selected.join(" ") + "\n";
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = i;
      backtraking(depth + 1);
      visited[i] = false;
    }
  }
};

backtraking(0);
console.log(answer.trim());
