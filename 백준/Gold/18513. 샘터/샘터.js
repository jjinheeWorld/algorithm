const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const start = input[1].split(" ").map(Number);

const visited = new Set();
const queue = [];
let answer = 0;
let home = 0;
let head = 0;

for (const s of start) {
  visited.add(s);
  queue.push([s, 0]);
}

while (queue.length > head && home < K) {
  const [current, dist] = queue[head++];

  for (const next of [current - 1, current + 1]) {
    if (visited.has(next)) continue;

    visited.add(next);
    queue.push([next, dist + 1]);

    answer += dist + 1;
    home++;

    if (home === K) break;
  }
}

console.log(answer);