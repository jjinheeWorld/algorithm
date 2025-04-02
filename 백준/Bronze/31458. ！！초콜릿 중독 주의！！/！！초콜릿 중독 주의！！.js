const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input[0];
const sH = new Map([
  ["0!", 1],
  ["1!", 1],
  ["!0", 1],
  ["!1", 0],
]);

for (let i = 1; i <= t; i++) {
  const str = input[i];
  const stack = [];

  for (let char of str) {
    if (stack.length > 0 && stack[stack.length - 1] !== "!") {
      if (char === "!") stack.push(sH.get(stack.pop() + "!"));
    } else stack.push(char);
  }

  while (stack.length > 1) {
    const num = stack.pop();
    const char = stack.pop();
    stack.push(sH.get(char + num));
  }

  console.log(stack.pop());
}
