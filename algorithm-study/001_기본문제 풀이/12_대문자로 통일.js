// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성해보자

function solution(s) {
  let answer = '';
  for (let x of s) {
    // 첫 번째 방법
    // 아스키코드 번호로도 풀 수 있음
    // 대문자와 소문자의 차이는 32
    // 32를 더하거나 빼면 아스키 코드 값을 대/소문자로 변환할 수 있다.
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    // 두 번째 방법
    // if (x === x.toLowerCase()) answer += x.toUpperCase();
    // else answer += x;
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
