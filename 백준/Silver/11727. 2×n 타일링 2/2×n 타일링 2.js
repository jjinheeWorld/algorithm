const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
