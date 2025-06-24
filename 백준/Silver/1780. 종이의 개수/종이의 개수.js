const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const paper = input.slice(1).map((row) => row.split(" ").map(Number));
const count = [0, 0, 0]; // -1, 0, 1

const checkPaper = (x, y, size) => {
  const first = paper[x][y];

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== first) return false;
    }
  }

  return true;
};

const cutPaper = (x, y, size) => {
  if (checkPaper(x, y, size)) {
    const first = paper[x][y];
    count[first + 1] += 1;
    return;
  }

  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cutPaper(x + i * newSize, y + j * newSize, newSize);
    }
  }
};

cutPaper(0, 0, N);
console.log(count[0]); // -1
console.log(count[1]); // 0
console.log(count[2]); // 1
