// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성해보자

// 첫 번째 방법
function solution(s) {
  let answer = '';
  // for of를 통해 s의 문자 하나씩 탐색하면서
  for (let x of s) {
    // 조건에 따라 answer에 +연산자를 써서 더하면
    if (x === 'A') answer += '#';
    else answer += x;
  }
  // answer에는 'B#N#N#'가 누적된다.
  return answer;
}

// 두 번째 방법
function solution2(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution2(str));
