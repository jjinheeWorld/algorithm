const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseT = Number(input[0]);
let answer = "";

for (let i = 1; i <= testCaseT; i++) {
  const [num1, num2] = input[i].split(" ");
    answer += Number(num1) + Number(num2) + "\n";
}

console.log(answer);
