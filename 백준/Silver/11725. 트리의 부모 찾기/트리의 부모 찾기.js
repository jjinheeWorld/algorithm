const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const visited = Array(N + 1).fill(false);
const tree = Array.from({ length: N + 1 }, () => []);
const answer = Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  const [node1, node2] = input[i].split(" ").map(Number);
  tree[node1].push(node2);
  tree[node2].push(node1);
}

const dfs = (node) => {
  visited[node] = true;
  for (let next of tree[node]) {
    if (!visited[next]) {
      answer[next] = node;
      dfs(next);
    }
  }
};

dfs(1);
console.log(answer.slice(2).join("\n"));