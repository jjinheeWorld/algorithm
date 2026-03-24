const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
const board = input.slice(1, 1 + R).map((line) => line.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const explode = (board) => {
  const nextBoard = Array.from({ length: R }, () => Array(C).fill("O"));

  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (board[x][y] === "O") {
        nextBoard[x][y] = ".";

        for (let dir = 0; dir < 4; dir++) {
          const nx = x + dx[dir];
          const ny = y + dy[dir];

          if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
          nextBoard[nx][ny] = ".";
        }
      }
    }
  }

  return nextBoard;
};

const fullBoard = Array.from({ length: R }, () => Array(C).fill("O"));

if (N === 1) {
  console.log(board.map((row) => row.join("")).join("\n"));
} else if (N % 2 === 0) {
  console.log(fullBoard.map((row) => row.join("")).join("\n"));
} else if (N % 4 === 3) {
  const first = explode(board);
  console.log(first.map((row) => row.join("")).join("\n"));
} else {
  const first = explode(board);
  const second = explode(first);
  console.log(second.map((row) => row.join("")).join("\n"));
}
