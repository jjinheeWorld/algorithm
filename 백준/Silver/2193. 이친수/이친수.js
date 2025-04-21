const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
dp[1][1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(String(dp[n][0] + dp[n][1]));
