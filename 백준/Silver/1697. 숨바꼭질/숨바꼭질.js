const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const max = 100001;
const visited = Array(max).fill(false);

const bfs = () => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [x, time] = queue.shift();
    if (x === K) return time;

    const dx = [-1, 1, x];
    for (let i = 0; i < 3; i++) {
      const nx = x + dx[i];

      if (nx >= 0 && nx < max && !visited[nx]) {
        visited[nx] = true;
        queue.push([nx, time + 1]);
      }
    }
  }
};

console.log(bfs());
