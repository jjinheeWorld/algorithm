const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let ca of croatianAlphabets) {
  input = input.split(ca).join("*");
}

console.log(input.length);