const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const answer = [];

const T = +input[0];
let idx = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[idx++]);

  const [px, py] = input[idx++].split(" ").map(Number); // 현재 위치
  const [gx, gy] = input[idx++].split(" ").map(Number); // 목표 위치

  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [[px, py, 0]];
  visited[px][py] = true;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === gx && y === gy) {
      answer.push(count);
      break;
    }

    for (let dir = 0; dir < 8; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}

console.log(answer.join("\n"));
