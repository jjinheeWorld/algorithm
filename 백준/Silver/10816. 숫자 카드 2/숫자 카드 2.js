const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cards = input[1].split(" ").map(Number);
const numbers = input[3].split(" ").map(Number);
const sH = new Map();

for (let card of cards) {
  if (!sH.has(card)) sH.set(card, 1);
  else sH.set(card, sH.get(card) + 1);
}

const answer = [];
for (let number of numbers) {
  if (sH.has(number)) answer.push(sH.get(number));
  else answer.push(0);
}

console.log(answer.join(" "));
