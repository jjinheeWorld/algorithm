// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.

function solution(s) {
  let cnt = 0;
  s = s.toLowerCase();
  for (let item of s) {
    if (item === "p") cnt++;
    else if (item === "y") cnt--;
  }

  return cnt === 0;
}
