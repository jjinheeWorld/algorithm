// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성해보자

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length; // 3
  let m = arr2.length; // 5
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  // p1이 남는다면
  while (p1 < n) answer.push(arr1[p1++]);
  // p2가 남는다면
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
