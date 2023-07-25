function solution(sides) {
  let answer = 1;
  let tot = 0;
  let max = Math.max(...sides);
  for (let i = 0; i < sides.length; i++) {
      tot += sides[i];
  }
  if ((tot - max) <= max) answer = 2;

  return answer;
}