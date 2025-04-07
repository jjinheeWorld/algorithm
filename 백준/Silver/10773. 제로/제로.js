const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(1).map(Number);

const stack = [];
let answer = 0;

for (let num of arr) {
  if (num) stack.push(num);
  else stack.pop();
}

answer = stack.length > 0 ? stack.reduce((acc, num) => acc + num) : 0;
console.log(answer);
