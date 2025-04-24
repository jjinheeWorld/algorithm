const fs = require("fs");
const [t, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const max = 1000000;
const mod = 1000000009;
const dp = Array(max + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
}

arr.forEach((n) => console.log(dp[n]));
