// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성해보자

function solution(s) {
  let answer = 0;
  for (let x of s) {
    // 첫 번째 방법
    // 아스키코드 번호로도 풀 수 있음
    // 대문자 65 ~ 90, 소문자 97 ~ 122
    //  let num = x.charCodeAt();
    //  if (num >= 65 && num <= 90) answer++;

    // 두 번째 방법
    // for of를 통해 s의 문자 하나씩 탐색하면서
    // x가 대문자로 변환해준 x와 같으면 answer를 하나씩 증가시킨다.
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
