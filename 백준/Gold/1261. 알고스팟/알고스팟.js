const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];
queue.push([0, 0, 0]);
visited[0][0] = true;

while (queue.length > 0) {
  const [y, x, count] = queue.shift();
  if (x === M - 1 && y === N - 1) {
    console.log(count);
    break;
  }

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx]) {
      visited[ny][nx] = true;

      if (maze[ny][nx] === 0) {
        queue.unshift([ny, nx, count]);
      } else {
        queue.push([ny, nx, count + 1]);
      }
    }
  }
}
