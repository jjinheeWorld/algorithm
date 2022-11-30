// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성해보자
// 출력하는 문자열은 원래의 입력순서를 유지한다.

// filter()
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    // if (s.indexOf(v) === i) return true; // true를 리턴한 배열의 요소를 모아 새로운 배열로 반환
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
