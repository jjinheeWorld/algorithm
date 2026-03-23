const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let startX = 0;
let startY = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 2) {
      startX = i;
      startY = j;
    }
  }
}

const dist = Array.from({ length: N }, () => Array(M).fill(-1));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 0) {
      dist[i][j] = 0;
    }
  }
}

dist[startX][startY] = 0;

const queue = [];
queue.push([startX, startY]);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

    if (graph[nx][ny] === 1 && dist[nx][ny] === -1) {
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(dist[i].join(" "));
}