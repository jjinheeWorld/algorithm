const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);
let count = 0;

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (node) => {
  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
