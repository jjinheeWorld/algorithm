// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성해보자
// 단, 회문을 검사할 때 대소문자를 구분하지 않는다.

// 첫 번째 방법
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) answer = 'NO';
  }
  return answer;
}

// 두 번째 방법
function solution2(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  // reverse() : 배열의 순서를 반전한다.
  // join() : 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
  if (s !== s.split('').reverse().join('')) answer = 'NO';
  return answer;
}

let str = 'goooG';
console.log(solution2(str));
