const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = +input[0];
const A = input.slice(1).map(Number);

// 원래 위치 기억
const original = A.map((value, index) => ({ value, index }));

// 값 기준으로 정렬
original.sort((a, b) => a.value - b.value);

let maxMove = 0;
for (let i = 0; i < N; i++) {
  const move = original[i].index - i;
  if (move > maxMove) maxMove = move;
}

console.log(maxMove + 1);