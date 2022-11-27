// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성해보자

function solution(s) {
  let answer = '';

  // 첫 번째 방법
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  // 두 번째 방법
  // 아스키코드 번호 활용해 봄
  // 대문자와 소문자의 차이는 32
  // for (let x of s) {
  //   let num = x.charCodeAt();
  //   if (65 <= num && num <= 90) answer += String.fromCharCode(num + 32);
  //   else answer += String.fromCharCode(num - 32);
  // }
  return answer;
}

console.log(solution('StuDY'));
