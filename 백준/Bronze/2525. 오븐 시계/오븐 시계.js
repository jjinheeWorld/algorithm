const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [hour, minute] = input[0].split(" ").map(Number);
const requiredTime = Number(input[1]);

const sumTime = minute + requiredTime;
hour += Math.floor(sumTime / 60);
minute = sumTime % 60;

hour %= 24;

console.log(hour, minute);
