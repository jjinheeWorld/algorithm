function solution(s) {
  let answer = 1;
  let stack = [];
  s = s.split('');
  for (let x of s) {
      if (stack.at(-1) === x) stack.pop();
      else stack.push(x);
  }
  if (stack.length > 0) return 0;
  return answer;
}

/** at()
 * 정숫값을 받아 해당 인덱스에 있는 항목을 반환하며, 양수와 음수를 사용할 수 있다. 
 * 음의 정수는 배열의 마지막 항목부터 거슬러 센다.
 */