// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성해보자
// 단, 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않는다. 알파벳 이외의 문자들은 무시한다.

function solution(s) {
  let answer = 'YES';
  // 모두 소문자로 바꾼 다음, 정규표현식으로 알파벳이 아닌 문자들은 모두 빈 문자열로 바꾼다.
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) answer = 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
