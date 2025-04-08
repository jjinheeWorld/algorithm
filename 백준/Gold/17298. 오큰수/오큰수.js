const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const answer = Array(n).fill(-1);
const stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    const index = stack.pop();
    answer[index] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
