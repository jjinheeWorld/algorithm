const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseT = +input[0];

for (let i = 1; i <= testCaseT; i++) {
  const str = input[i];
  console.log(`${str[0]}${str[str.length - 1]}`);
}