const fs = require("fs");
const [a, b, v] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// 달팽이가 하루에 올라가는 거리
const dailyClimb = a - b;
// 정상에 도달하기 전까지 필요한 거리
const target = v - a;
// 정상에 도달까지 걸리는 일수 계산
const days = Math.ceil(target / dailyClimb) + 1;
console.log(days);
