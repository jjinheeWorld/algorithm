const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (const line of input) {
  if (line === "END") break;
  console.log(line.split("").reverse().join(""));
}
