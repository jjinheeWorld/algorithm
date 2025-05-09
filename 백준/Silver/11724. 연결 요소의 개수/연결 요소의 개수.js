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

const bfs = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    bfs(i);
    count++;
  }
}

console.log(count);
