const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((line) => line.split(" ").map(Number));
let maxSafeZone = 0;

const spreadVirus = (lab) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && lab[nx][ny] === 0) {
        lab[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
};

const countSafeZone = (lab) => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) count++;
    }
  }

  return count;
};

const dfs = (count) => {
  if (count === 3) {
    const copiedLab = lab.map((row) => [...row]);
    spreadVirus(copiedLab);
    const safeZone = countSafeZone(copiedLab);
    maxSafeZone = Math.max(maxSafeZone, safeZone);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1;
        dfs(count + 1);
        lab[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(maxSafeZone);
