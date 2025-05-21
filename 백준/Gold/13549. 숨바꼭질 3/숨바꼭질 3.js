const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const max = 100001;
const visited = Array(max).fill(false);
const queue = [];

queue.push([N, 0]);
visited[N] = true;

while (queue.length > 0) {
  const [pos, time] = queue.shift();
  if (pos === K) {
    console.log(time);
    break;
  }
  for (let next of [pos - 1, pos + 1, pos * 2]) {
    if (next >= 0 && next < max && !visited[next]) {
      visited[next] = true;

      if (next === pos * 2) {
        queue.unshift([next, time]);
      } else {
        queue.push([next, time + 1]);
      }
    }
  }
}
