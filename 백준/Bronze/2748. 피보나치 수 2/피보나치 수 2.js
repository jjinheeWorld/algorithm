const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = [];
dp[0] = 0n;
dp[1] = 1n;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[N].toString());