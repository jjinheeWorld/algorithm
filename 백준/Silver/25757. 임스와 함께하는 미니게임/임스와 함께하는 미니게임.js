const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, gameName] = input[0].split(" ");
const players = new Set(input.slice(1));

let playSize;

switch (gameName) {
  case "Y": {
    playSize = 2;
    break;
  }
  case "F": {
    playSize = 3;
    break;
  }
  case "O": {
    playSize = 4;
    break;
  }
}

const answer = Math.floor(players.size / (playSize - 1));

console.log(answer);
