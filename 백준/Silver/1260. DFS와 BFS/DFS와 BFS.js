const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, start] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsResult = [];
const dfsVisited = Array(n + 1).fill(false);

const dfs = (v) => {
  dfsVisited[v] = true;
  dfsResult.push(v);
  for (let next of graph[v]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
};

const bfsResult = [];
const bfsVisited = Array(n + 1).fill(false);

const bfs = (start) => {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    bfsResult.push(v);

    for (let next of graph[v]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
};

dfs(start);
bfs(start);
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
