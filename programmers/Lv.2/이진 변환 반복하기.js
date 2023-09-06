function solution(s) {
  let answer = [];
  let zrsRmv = cnt = 0;
  
  while (s !== '1') {
      let newS = '';
      for (let x of s) {
          if (x === '1') newS += x;
          else zrsRmv++;
      }
      cnt++;
      s = newS.length.toString(2);
  }
  answer.push(cnt);
  answer.push(zrsRmv);
  return answer;
}

/** toString()
 * 주어진 값을 문자열로 변환하는 JavaScript의 내장 함수
   toString(2)와 같이 인자를 전달하면, 해당 인자에 맞게 변환된 문자열을 생성한다. 
   toString(2)는 숫자를 이진법으로 변환하는 함수 호출을 나타낸다.
 */