const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseT = +input[0];

for (let i = 1; i <= testCaseT; i++) {
  const [num1, num2] = input[i].split(" ").map((item) => +item);
  console.log(`Case #${i}: ${num1 + num2}`);
}
