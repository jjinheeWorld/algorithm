const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = [];

for (let i = 97; i <= 122; i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));
