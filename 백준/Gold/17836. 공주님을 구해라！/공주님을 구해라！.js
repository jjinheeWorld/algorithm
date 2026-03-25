const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const graph = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

queue.push([0, 0, 0]);
visited[0][0] = true;

let answer = Infinity;

while (queue.length > 0) {
  const [x, y, time] = queue.shift();

  if (time > T) continue;

  // 공주 발견
  if (x === N - 1 && y === M - 1) {
    answer = Math.min(answer, time);
  }

  // 검 발견
  if (graph[x][y] === 2) {
    const dist = (N - x - 1) + (M - y - 1);
    answer = Math.min(answer, time + dist);
  }

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= N ||
      ny >= M ||
      graph[nx][ny] === 1 ||
      visited[nx][ny]
    )
      continue;

    visited[nx][ny] = true;
    queue.push([nx, ny, time + 1]);
  }
}

console.log(answer <= T ? answer : "Fail");
