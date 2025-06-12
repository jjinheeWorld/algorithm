const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const board = input.slice(1).map((row) => row.split(""));
const visitedNormal = Array.from({ length: N }, () => Array(N).fill(false));
const visitedColorBlind = Array.from({ length: N }, () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y, visited, isColorBlind) => {
  const queue = [[x, y]];
  const color = board[x][y];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        const nextColor = board[nx][ny];

        if (isColorBlind) {
          if (
            (color === "R" || color === "G") &&
            (nextColor === "R" || nextColor === "G")
          ) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          } else if (color === "B" && nextColor === "B") {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        } else {
          if (color === nextColor) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
};

let normalCount = 0;
let colorBlindCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitedNormal[i][j]) {
      bfs(i, j, visitedNormal, false);
      normalCount++;
    }
    if (!visitedColorBlind[i][j]) {
      bfs(i, j, visitedColorBlind, true);
      colorBlindCount++;
    }
  }
}

console.log(normalCount, colorBlindCount);
