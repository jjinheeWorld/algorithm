const fs = require("fs");
const inputN = +fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i <= 9; i++) {
  console.log(`${inputN} * ${i} = ${inputN * i}`);
}
