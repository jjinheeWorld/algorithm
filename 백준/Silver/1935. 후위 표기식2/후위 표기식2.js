const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const str = input[1];
const numArr = input.slice(2).map(Number);

const strMap = new Map();

for (let i = 0; i < n; i++) {
  strMap.set(String.fromCharCode(65 + i), numArr[i]);
}

const stack = [];

for (let char of str) {
  if (strMap.has(char)) stack.push(strMap.get(char));
  else {
    const b = stack.pop();
    const a = stack.pop();

    switch (char) {
      case "+": {
        stack.push(a + b);
        break;
      }
      case "-": {
        stack.push(a - b);
        break;
      }
      case "*": {
        stack.push(a * b);
        break;
      }
      case "/": {
        stack.push(a / b);
        break;
      }
    }
  }
}

console.log(stack.pop().toFixed(2));
