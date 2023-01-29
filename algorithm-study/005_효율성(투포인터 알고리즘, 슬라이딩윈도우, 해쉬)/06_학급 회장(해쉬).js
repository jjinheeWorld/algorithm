// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했다. 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성해보자
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정한다.

function solution(s) {
  let answer;
  // Map 객체는 key와 value로 이루어진 자료구조
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
