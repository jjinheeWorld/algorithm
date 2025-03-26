const fs = require("fs");
let inputN = +fs.readFileSync("/dev/stdin").toString();

for (let i = 1; i < 2 * inputN; i++) {
  const level = i <= inputN ? i : inputN * 2 - i;
  const spaces = " ".repeat(inputN - level);
  const stars = "*".repeat(level * 2 - 1);

  console.log(spaces + stars);
}
