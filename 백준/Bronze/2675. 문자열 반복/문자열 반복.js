const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseT = +input[0];

for (let i = 1; i <= testCaseT; i++) {
  const [count, str] = input[i].split(" ");
  const result = str
    .split("")
    .map((char) => char.repeat(Number(count)))
    .join("");
  console.log(result);
}
