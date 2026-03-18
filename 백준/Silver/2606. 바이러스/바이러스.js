const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const V = Number(input[0]);
const E = Number(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < 2 + E; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(V + 1).fill(false);
const queue = [];

queue.push(1);
visited[1] = true;

let count = 0;

while (queue.length > 0) {
  const current = queue.shift();
  graph[current].forEach((next) => {
    if (!visited[next]) {
      queue.push(next);
      visited[next] = true;
      count++;
    }
  });
}

console.log(count);