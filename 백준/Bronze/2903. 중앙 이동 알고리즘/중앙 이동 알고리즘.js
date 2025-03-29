const fs = require("fs");
let n = +fs.readFileSync("/dev/stdin").toString().trim();

const answer = (2 ** n + 1) ** 2;
console.log(answer);
