const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const max = 100001;
const visited = Array(max).fill(false);

const bfs = () => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [pos, time] = queue.shift();
    if (pos === K) return time;

    for (let next of [pos + 1, pos - 1, pos * 2]) {
      if (next >= 0 && next < max && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(bfs());
