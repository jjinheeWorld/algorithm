const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      paper[x + dx][y + dy] = true;
    }
  }
}

let area = 0;
for (let row of paper) {
  for (let cell of row) {
    if (cell) area++;
  }
}

console.log(area);