const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input.slice(1).map((line) => line.split(" ").map(Number));

while (N > 1) {
  const next = [];

  for (let i = 0; i < N; i += 2) {
    const row = [];
    for (let j = 0; j < N; j += 2) {
      const temp = [arr[i][j], arr[i][j + 1], arr[i + 1][j], arr[i + 1][j + 1]];

      temp.sort((a, b) => b - a);
      row.push(temp[1]);
    }
    next.push(row);
  }

  arr = next;
  N /= 2;
}

console.log(arr[0][0]);