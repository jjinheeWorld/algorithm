const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;

for (let i = 1; i <= n; i++) {
  const num = i.toString().split("").map(Number).reduce((acc, v) => acc + v, 0);

  if (num + i === n) {
    answer = i;
    break;
  }
}

console.log(answer);
