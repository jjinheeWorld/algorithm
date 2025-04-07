const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.splice(1);

const stack = [];

for (let command of arr) {
  switch (command) {
    case "pop":
      console.log(stack.length > 0 ? stack.pop() : -1);
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      console.log(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      console.log(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
    default:
      const [_, value] = command.split(" ");
      stack.push(Number(value));
  }
}
