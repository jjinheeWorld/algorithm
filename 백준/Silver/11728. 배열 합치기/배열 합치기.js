const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let i = 0;
let j = 0;

const answer = [];
while (i < N && j < M) {
  if (A[i] >= B[j]) {
    answer.push(B[j]);
    j++;
  } else {
    answer.push(A[i]);
    i++;
  }
}

while (i < N) {
  answer.push(A[i]);
  i++;
}
while (j < M) {
  answer.push(B[j]);
  j++;
}

console.log(answer.join(" "));