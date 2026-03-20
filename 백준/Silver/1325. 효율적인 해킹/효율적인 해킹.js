const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < 1 + M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[v].push(u);
}

let answer = [];
let max = 0;

const dfs = (start) => {
  const visited = Array(N + 1).fill(false);
  const stack = [start];
  let count = 1;
  visited[start] = true;

  while (stack.length > 0) {
    const current = stack.pop();
    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
        count++;
      }
    }
  }

  return count;
};

for (let start = 1; start <= N; start++) {
  const count = dfs(start);

  if (count > max) {
    max = count;
    answer = [start];
  } else if (count === max) {
    answer.push(start);
  }
}

console.log(answer.join(" "));