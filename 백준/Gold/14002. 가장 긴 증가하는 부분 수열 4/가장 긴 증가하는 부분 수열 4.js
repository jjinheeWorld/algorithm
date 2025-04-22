const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const a = input[1].split(" ").map(Number);
const dp = Array(n).fill(1);
const prev = Array(n).fill(-1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxLength = Math.max(...dp);
console.log(maxLength);

let index = dp.indexOf(maxLength);
const answer = [];

while (index !== -1) {
  answer.push(a[index]);
  index = prev[index];
}

console.log(answer.reverse().join(" "));
