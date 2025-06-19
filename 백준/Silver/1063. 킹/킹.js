const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [king, stone, n] = input[0].split(" ");
const moves = new Map([
  ["R", [0, 1]],
  ["L", [0, -1]],
  ["B", [-1, 0]],
  ["T", [1, 0]],
  ["RT", [1, 1]],
  ["LT", [1, -1]],
  ["RB", [-1, 1]],
  ["LB", [-1, -1]],
]);

// 체스 좌표 -> 배열 인덱스 변환
let [kingCol, kingRow] = [king.charCodeAt(0) - 65, Number(king[1]) - 1];
let [stoneCol, stoneRow] = [stone.charCodeAt(0) - 65, Number(stone[1]) - 1];

for (let i = 1; i <= Number(n); i++) {
  const [dr, dc] = moves.get(input[i]);

  const nextKingRow = kingRow + dr;
  const nextKingCol = kingCol + dc;

  // 킹이 체스판을 벗어나면 무시
  if (nextKingRow < 0 || nextKingRow > 7 || nextKingCol < 0 || nextKingCol > 7) continue;

  // 킹이 돌과 부딪히는 경우
  if (nextKingRow === stoneRow && nextKingCol === stoneCol) {
    const nextStoneRow = stoneRow + dr;
    const nextStoneCol = stoneCol + dc;

    // 돌이 체스판 밖으로 나가면 이동 무시
    if (nextStoneRow < 0 || nextStoneRow > 7 || nextStoneCol < 0 || nextStoneCol > 7) continue;

    // 돌 이동
    stoneRow = nextStoneRow;
    stoneCol = nextStoneCol;
  }

  // 킹 이동
  kingRow = nextKingRow;
  kingCol = nextKingCol;
}

// 좌표 -> 체스판 문자로 변환
const resultKing = String.fromCharCode(kingCol + 65) + (kingRow + 1);
const resultStone = String.fromCharCode(stoneCol + 65) + (stoneRow + 1);

console.log(resultKing);
console.log(resultStone);
