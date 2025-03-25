const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [num1, num2] = input[i].split(" ").map((item) => +item);
  console.log(num1 + num2);
}
