const fs = require("fs");
let binary = fs.readFileSync("/dev/stdin").toString().trim();

while (binary.length % 3 !== 0) {
  binary = "0" + binary;
}

let answer = "";

for (let i = 0; i < binary.length; i += 3) {
  const arr = binary.slice(i, i + 3);
  answer += parseInt(arr, 2).toString(8);
}

console.log(answer);
