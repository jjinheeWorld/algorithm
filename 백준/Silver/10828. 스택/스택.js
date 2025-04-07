const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.splice(1);

const stack = [];
const answer = [];

for (let i = 0; i < arr.length; i++) {
  const [command, value] = arr[i].split(" ");
  switch (command) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      answer.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));
