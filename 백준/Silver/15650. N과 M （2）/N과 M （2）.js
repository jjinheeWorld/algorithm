const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const answer = [];

const dfs = (start, arr) => {
  if (arr.length === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    dfs(i + 1, [...arr, i]);
  }
};

dfs(1, []);
console.log(answer.join("\n"));
