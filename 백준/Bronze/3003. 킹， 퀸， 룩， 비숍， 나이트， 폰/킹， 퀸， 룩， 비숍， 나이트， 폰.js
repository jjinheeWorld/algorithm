const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const blackPieces = [1, 1, 2, 2, 2, 8];
const answer = input.map((piece, i) => blackPieces[i] - piece);

console.log(answer.join(" "));
