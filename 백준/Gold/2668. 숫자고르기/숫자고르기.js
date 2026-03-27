const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = [0, ...input.slice(1).map(Number)];

const answer = [];

for (let i = 1; i <= N; i++) {
  const visited = Array(N + 1).fill(false);

  let current = i;

  while (!visited[current]) {
    visited[current] = true;
    current = arr[current];
  }

  if (current === i) {
    answer.push(i);
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
answer.forEach((number) => console.log(number));