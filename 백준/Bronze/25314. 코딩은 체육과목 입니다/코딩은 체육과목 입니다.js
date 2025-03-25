const fs = require("fs");
const inputN = +fs.readFileSync("/dev/stdin").toString().trim();
const bite = 4;

console.log(`${"long ".repeat(inputN / bite)}int`);
