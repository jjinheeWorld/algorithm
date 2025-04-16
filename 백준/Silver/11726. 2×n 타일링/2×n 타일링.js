const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[n]);
