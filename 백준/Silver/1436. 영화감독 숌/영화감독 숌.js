const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
let num = 665;

while (count !== n) {
  num++;
  const strNum = String(num);
  if (strNum.includes("666")) count++;
}

console.log(num);
