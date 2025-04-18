const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const mod = 1000000000;
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

dp[1][0] = 0;

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  dp[i][0] = dp[i - 1][1];
  dp[i][9] = dp[i - 1][8];
  for (let j = 1; j <= 8; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod;
  }
}

let sum = 0;

for (let i = 0; i <= 9; i++) {
  sum = (sum + dp[n][i]) % mod;
}

console.log(sum);
