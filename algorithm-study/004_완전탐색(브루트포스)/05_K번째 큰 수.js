// 1부터 100사이의 자연수가 적힌 N장의 카드가 있다. 같은 숫자의 카드가 여러장 있을 수 있다.
// 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록한다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성해보자

function solution(n, k, card) {
  let answer = 0;
  // Set 객체는 중복되지 않는 유일한 값들의 집합이다.
  // 인덱스로 요소 접근이 불가능하다.
  let tmp = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        // add()는 Set 객체에 새로운 요소를 추가할 때 사용한다.
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  // 배열로 만든 후, 내림차순으로 정렬
  let a = Array.from(tmp).sort((a, b) => b - a);
  // k번째 큰 수
  // 인덱스는 0부터 시작하므로 k - 1
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
