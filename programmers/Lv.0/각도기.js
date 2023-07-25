// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4
function solution(angle) {
  if (0 < angle && angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (90 < angle && angle < 180) return 3;
  else if (angle === 180) return 4;
}