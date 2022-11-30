// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있으면 'YES' 출력, 만들 수 없으면 'NO' 출력

function solution(a, b, c) {
  let answer = 'YES',
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(13, 33, 17));

/* 📐 삼각형이 만들어지는 원리
가장 긴 선의 길이보다 짧은 두 선의 길이의 합이 더 커야 삼각형이 만들어진다. 
*/
