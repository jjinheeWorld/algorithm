const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

function solution(n, m, k) {
  let team = Math.min(Math.floor(n / 2), m);

  while (n + m - team * 3 < k) {
    team--;
  }

  return team;
}

console.log(solution(N, M, K));
