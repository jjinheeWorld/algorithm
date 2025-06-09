const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const [R1, C1, R2, C2] = input[1].split(" ").map(Number);
const visited = Array.from({ length: N }, () => Array(N).fill(false));

const dr = [-2, -2, 0, 0, 2, 2];
const dc = [-1, 1, -2, 2, -1, 1];

const bfs = () => {
  const queue = [[R1, C1, 0]];
  visited[R1][C1] = true;

  while (queue.length > 0) {
    const [r, c, count] = queue.shift();
    if (r === R2 && c === C2) {
      console.log(count);
      found = true;
      return;
    }

    for (let i = 0; i < 6; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited[nr][nc]) {
        visited[nr][nc] = true;
        queue.push([nr, nc, count + 1]);
      }
    }
  }
  // 도달하지 못한 경우
  console.log(-1);
};

bfs();
