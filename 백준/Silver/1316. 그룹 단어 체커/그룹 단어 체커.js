const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
let count = n;

for (let i = 1; i <= n; i++) {
  const stack = [];

  for (let char of input[i]) {
    if (!stack.includes(char)) stack.push(char);
    else if (char !== stack[stack.length - 1]) {
      count--;
      break;
    }
  }
}

console.log(count);
