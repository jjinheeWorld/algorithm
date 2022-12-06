// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성해보자

function solution(s, t) {
  let answer = [];
  let p = 1000;
  // -> 방향
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  // p 초기화
  p = 1000;
  // <- 방향
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      // 기존에 0이 있으므로 굳이 할당하지 않아도 됨.
      // answer[i] = 0;
    } else {
      p++;
      // 가장 작은 수로 할당
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
