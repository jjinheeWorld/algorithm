const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const t = input[0];
const max = 100000;
const mod = 1000000009;

const dp = Array.from({ length: max + 1 }, () => Array(4).fill(0));

dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= max; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % mod;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % mod;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % mod;
}

for (let i = 1; i <= t; i++) {
  const n = input[i];
  console.log(dp[n].reduce((acc, num) => (acc + num) % mod, 0));
}
