const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = [];
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[N]);