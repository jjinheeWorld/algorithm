// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만드는 프로그램을 작성해보자

function solution(str) {
  let answer = '';
  for (let x of str) {
    // 문자 하나씩 탐색하며 숫자인지 아닌지를 판별한다.
    // x가 숫자면 answer에 누적한다.
    if (!isNaN(x)) answer += x;
  }
  // 숫자만 누적된 문자열을 parseInt()로 반환한다.
  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
