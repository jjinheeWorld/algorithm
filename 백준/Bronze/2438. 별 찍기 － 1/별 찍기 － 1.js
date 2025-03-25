const fs = require("fs");
const inputN = +fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i <= inputN; i++) {
  console.log("*".repeat(i));
}
