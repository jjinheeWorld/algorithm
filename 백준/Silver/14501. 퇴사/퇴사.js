const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array(N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  const [time, pay] = schedule[i];
  if (i + time <= N) {
    dp[i] = Math.max(pay + dp[i + time], dp[i + 1]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);