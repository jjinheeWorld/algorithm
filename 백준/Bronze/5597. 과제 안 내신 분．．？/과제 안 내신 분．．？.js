const fs = require("fs");
const input = new Set(
  fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)
);

for (let i = 1; i <= 30; i++) {
  if (!input.has(i)) console.log(i);
}
