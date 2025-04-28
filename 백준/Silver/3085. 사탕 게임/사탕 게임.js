const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const board = input.slice(1).map((line) => line.split(""));

const check = (board) => {
  let maxCount = 1;

  // 가로 검사
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 1; j < n; j++) {
      if (board[i][j] === board[i][j - 1]) {
        count++;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 1;
      }
    }
  }

  // 세로 검사
  for (let j = 0; j < n; j++) {
    let count = 1;
    for (let i = 1; i < n; i++) {
      if (board[i][j] === board[i - 1][j]) {
        count++;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 1;
      }
    }
  }

  return maxCount;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 오른쪽 칸과 교환
    if (j + 1 < n) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      answer = Math.max(answer, check(board));
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]; // 복구
    }

    // 아래쪽 칸과 교환
    if (i + 1 < n) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      answer = Math.max(answer, check(board));
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]]; // 복구
    }
  }
}

console.log(answer);
