const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = +input[0];
let idx = 1;

const answer = [];

for (let t = 0; t < K; t++) {
  const [V, E] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const color = Array(V + 1).fill(-1); // -1 : 미방문, 0: 빨간색, 1: 파란색

  for (let i = 0; i < E; i++) {
    const [u, v] = input[idx++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  let isBipartite = true;

  const bfs = (start) => {
    const queue = [start];
    color[start] = 0;

    while (queue.length > 0) {
      const node = queue.shift();

      for (let next of graph[node]) {
        if (color[next] === -1) {
          color[next] = 1 - color[node];
          queue.push(next);
        } else if (color[node] === color[next]) {
          isBipartite = false;
          return;
        }
      }
    }
  };

  for (let i = 1; i <= V; i++) {
    if (color[i] === -1) bfs(i);
    if (!isBipartite) break;
  }

  answer.push(isBipartite ? "YES" : "NO");
}

console.log(answer.join("\n"));
