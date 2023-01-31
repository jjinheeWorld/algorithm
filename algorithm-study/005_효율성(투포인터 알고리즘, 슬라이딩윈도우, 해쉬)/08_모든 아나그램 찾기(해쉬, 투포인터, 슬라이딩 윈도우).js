// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성해보자
// 아나그램 판별시 대소문자가 구분되고 부분문자열은 연속된 문자열이어야 한다.

// t문자열 Map과 s의 부분문자열 Map 비교
// Map의 size가 같은지
// Map의 key가 같은지
// Map의 value가 같은지
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  // t문자열 Map, tH 만들기
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // s의 부분문자열 Map 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // 투포인터, 슬라이딩 윈도우 알고리즘으로 s의 부분문자열 Map, sH 만들기
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 비교
    if (compareMaps(sH, tH)) answer++;
    // 제거
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
