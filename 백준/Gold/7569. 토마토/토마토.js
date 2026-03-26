const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, H] = input[0].split(" ").map(Number);
const box = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array(M)),
);

let index = 1;
for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    box[h][n] = input[index].split(" ").map(Number);
    index++;
  }
}

const queue = [];

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (box[h][n][m] === 1) {
        queue.push([h, n, m]);
      }
    }
  }
}

const dh = [0, 0, 0, 0, -1, 1];
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];

let head = 0;
while (queue.length > head) {
  const [h, y, x] = queue[head++];

  for (let dir = 0; dir < 6; dir++) {
    const nh = h + dh[dir];
    const ny = y + dx[dir];
    const nx = x + dy[dir];

    if (nh < 0 || nh >= H || ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (box[nh][ny][nx] !== 0) continue;

    box[nh][ny][nx] = box[h][y][x] + 1;
    queue.push([nh, ny, nx]);
  }
}

let max = 0;
for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (box[h][n][m] === 0) {
        console.log(-1);
        return;
      }
      max = Math.max(max, box[h][n][m]);
    }
  }
}

console.log(max - 1);