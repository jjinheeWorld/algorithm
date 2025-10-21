const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

function factorial(N) {
  if (N === 0) return 1;
  return N * factorial(N - 1);
}

function solution(N, K) {
  return factorial(N) / (factorial(N - K) * factorial(K));
}

console.log(solution(N, K));