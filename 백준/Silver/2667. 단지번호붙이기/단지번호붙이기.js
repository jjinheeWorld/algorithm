const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const map = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const answer = [];

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const dfs = (x, y) => {
  visited[x][y] = true;
  let count = 1;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      map[nx][ny] === 1 &&
      !visited[nx][ny]
    ) {
      count += dfs(nx, ny);
    }
  }
  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      const count = dfs(i, j);
      answer.push(count);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
