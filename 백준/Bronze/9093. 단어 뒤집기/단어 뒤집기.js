const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const reversedWords = input[i]
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  console.log(reversedWords.join(" "));
}
