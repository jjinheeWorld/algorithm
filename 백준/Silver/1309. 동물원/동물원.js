const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const mod = 9901;
const dp = Array(n + 1).fill(0);

if (n === 1) {
  console.log(3);
} else {
  dp[1] = 3;
  dp[2] = 7;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % mod;
  }

  console.log(dp[n]);
}
