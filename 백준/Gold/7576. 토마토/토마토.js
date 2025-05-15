const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let day = 0;
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let idx = 0;
while (idx < queue.length) {
  const [y, x] = queue[idx++];

  for (let dir = 0; dir < 4; dir++) {
    const ny = y + dy[dir];
    const nx = x + dx[dir];

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && box[ny][nx] === 0) {
      box[ny][nx] = box[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) {
      console.log(-1);
      return;
    }

    day = Math.max(day, box[i][j]);
  }
}

console.log(day - 1);
