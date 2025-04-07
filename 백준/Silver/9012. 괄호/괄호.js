const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1);

function isVPS(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(") stack.push(char);
    else {
      if (stack.length > 0) stack.pop();
      else return "NO";
    }
  }
  return stack.length > 0 ? "NO" : "YES";
}

for (let str of arr) {
  console.log(isVPS(str));
}
