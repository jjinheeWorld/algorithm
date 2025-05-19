const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const max = 100001;
const visited = Array(max).fill(false);
const prev = Array(max).fill(-1);

const bfs = () => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [X, time] = queue.shift();
    if (X === K) {
      console.log(time);

      const path = [];
      let cur = K;
      while (cur !== -1) {
        path.push(cur);
        cur = prev[cur];
      }

      console.log(path.reverse().join(" "));
      return;
    }

    for (let next of [X - 1, X + 1, X * 2]) {
      if (next >= 0 && next < max && !visited[next]) {
        visited[next] = true;
        prev[next] = X;
        queue.push([next, time + 1]);
      }
    }
  }
};

bfs();
