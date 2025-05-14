const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 상 하 좌 우 좌상 우상 좌하 우하
const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

const answer = [];
let idx = 0;
while (idx < input.length) {
  const [w, h] = input[idx].split(" ").map(Number);

  if (w === 0 && h === 0) break;
  idx++;

  const map = [];
  for (let i = 0; i < h; i++) {
    map.push(input[idx].split(" ").map(Number));
    idx++;
  }

  const visited = Array.from({ length: h }, () => Array(w).fill(false));

  const dfs = (x, y) => {
    visited[x][y] = true;

    for (let dir = 0; dir < 8; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (
        nx >= 0 &&
        nx < h &&
        ny >= 0 &&
        ny < w &&
        map[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        dfs(nx, ny);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
