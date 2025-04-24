const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const cost = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(3).fill(0));
dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];

for (let i = 1; i < n; i++) {
  dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // 빨강
  dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // 초록
  dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // 파랑
}

console.log(Math.min(...dp[n - 1]));
