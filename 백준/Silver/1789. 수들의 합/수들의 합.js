const fs = require("fs");
const S = +fs.readFileSync("/dev/stdin").toString().trim();

let sum = 0;
let count = 0;
let number = 1;

while (sum + number <= S) {
  sum += number;
  number++;
  count++;
}

console.log(count);
