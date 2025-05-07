const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n }, () => []);
const visited = Array(n).fill(false);
let found = false;

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (node, depth) => {
  if (depth === 4) {
    found = true;
    return;
  }

  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
      if (found) return;
    }
  }
  visited[node] = false;
};

for (let i = 0; i < n; i++) {
  dfs(i, 0);
  if (found) break;
}

console.log(found ? 1 : 0);
