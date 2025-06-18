const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input.slice(1, N + 1).map((line) => line.split("").map(Number));
const B = input.slice(N + 1).map((line) => line.split("").map(Number));

// 3 x 3 뒤집기 함수
const toggle = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      A[i][j] = 1 - A[i][j];
    }
  }
};

let count = 0;

// A와 B를 비교하면서 다르면 toggle
for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= M - 3; j++) {
    if (A[i][j] !== B[i][j]) {
      toggle(i, j);
      count++;
    }
  }
}

// 최종적으로 A와 B가 같은지 확인
let isSame = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (A[i][j] !== B[i][j]) {
      isSame = false;
      break;
    }
  }
  if (!isSame) break;
}

console.log(isSame ? count : -1);
