// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성해보자

function solution(arr1, arr2) {
  let answer = [];
  // 오름차순 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    // arr1[p1]과 arr2[p2]이 같으면 p1, p2 둘다 하나씩 증가
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
      // arr1[p1]이 arr2[p2]보다 작으면 p1 증가
    } else if (arr1[p1] < arr2[p2]) p1++;
    // arr1[p1]이 arr2[p2]보다 크면 p2 증가
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
