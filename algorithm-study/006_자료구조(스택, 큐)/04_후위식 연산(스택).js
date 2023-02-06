// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성해보자

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x)); // 숫자만 stack에 넣어준다.
    else {
      // 만약 숫자가 아니라면 (연산자라면)
      let rt = stack.pop(); // stack에서 먼저 나오는 숫자를 오른쪽에 위치
      let lt = stack.pop(); // stack에서 나중에 나오는 숫자를 왼쪽에 위치
      // 연산자에 따라 연산한 값을 다시 stack에 넣어준다.
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  // 모든 연산이 끝난 후 stack에는 결과값인 숫자 하나만 있을 것이다.
  // answer에 넣어주면 끝!
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
