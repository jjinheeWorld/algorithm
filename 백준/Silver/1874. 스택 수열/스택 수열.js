const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input.slice(1).map(Number);

const stack = [];
let answer = "";
let num = 1;

for (let i = 0; i < n; i++) {
  while (arr[i] >= num) {
    stack.push(num++);
    answer += "+";
  }
  if (arr[i] === stack[stack.length - 1]) {
    stack.pop();
    answer += "-";
  }
}

console.log(!stack.length ? answer.split("").join("\n") : "NO");
