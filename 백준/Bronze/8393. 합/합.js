const fs = require("fs");
const inputN = +fs.readFileSync("/dev/stdin").toString().trim();
let answer = 0;

for (let i = 1; i <= inputN; i++) {
  answer += i;
}

console.log(answer);
