const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = Array(101).fill(0);

// 사다리
for (let i = 1; i <= N; i++) {
  const [index, move] = input[i].split(" ").map(Number);
  board[index] = move;
}

// 뱀
for (let i = N + 1; i <= N + M; i++) {
  const [index, move] = input[i].split(" ").map(Number);
  board[index] = move;
}

// BFS
const visited = Array(101).fill(false);
const queue = [[1, 0]];
visited[1] = true;

while (queue.length > 0) {
  const [x, count] = queue.shift();
  if (x === 100) {
    console.log(count);
    break;
  }

  for (let i = 1; i <= 6; i++) {
    const nx = x + i;
    if (nx >= 1 && nx <= 100 && !visited[nx]) {
      visited[nx] = true;

      if (!board[nx]) {
        queue.push([nx, count + 1]);
      } else {
        queue.push([board[nx], count + 1]);
      }
    }
  }
}