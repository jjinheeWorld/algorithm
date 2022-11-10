// 한 개의 문자열을 받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성해보자
// 문자열의 길이는 100을 넘지 ❌

// 첫 번째 방법
function solution(s, t) {
  let answer = 0;
  // for of를 통해 s의 문자 하나씩 탐색하면서
  for (let x of s) {
    // t일 경우, answer를 하나씩 증가시킨다.
    if (x === t) answer++;
  }
  return answer;
}

// 두 번째 방법
function solution2(s, t) {
  // split()는 ()안의 분할 기준으로 문자열을 분할해주는 도구
  // 분할된 문자열은 배열로 리턴된다.
  let answer = s.split(t).length;
  // 분할된 기준은 -1 해야 하므로
  return answer - 1;
}
let str = 'COMPUTERPROGRAMMING';
console.log(solution2(str, 'R'));
