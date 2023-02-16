// 첫 번째 방법
function solution(size, arr) {
  // Array.from을 이용하여 빈 배열을 초기화
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    // Cache Miss일 때
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      // Cache Hit일 때
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

// 두 번째 방법 (내장함수)
function solution2(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    // Cache Miss일 때
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
      // Cache Hit일 때
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
    answer[0] = x;
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution2(5, arr));
