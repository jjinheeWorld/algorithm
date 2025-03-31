const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const xArr = [];
const yArr = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
}

const x = Math.max(...xArr) - Math.min(...xArr);
const y = Math.max(...yArr) - Math.min(...yArr);

console.log(x * y);
