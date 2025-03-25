const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseNumber = +input[0];
for (let i = 1; i <= testCaseNumber; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  console.log(arr[0] + arr[1]);
}
