const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr1 = [];
const arr2 = [];

for (let i = 1; i <= n * 2; i++) {
  if (i <= n) {
    arr1.push(input[i].split(" ").map(Number));
  } else {
    arr2.push(input[i].split(" ").map(Number));
  }
}

for (let i = 0; i < n; i++) {
  const answer = [];
  for (let j = 0; j < m; j++) {
    answer.push(arr1[i][j] + arr2[i][j]);
  }
  console.log(answer.join(" "));
}
