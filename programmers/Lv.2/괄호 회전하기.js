function solution(s) {
  let cnt = 0;
  const mapping = {
      ')' : '(',
      ']' : '[',
      '}' : '{'
  }
  
  s = s.split('');
  
  for (let i = 0; i < s.length; i++) {
      let stack = [];
      for (let x of s) {
          if ('([{'.includes(x)) stack.push(x);
          else if (stack[stack.length - 1] === mapping[x]) stack.pop();
          else stack.push(x);
      }
      if (stack.length === 0) cnt++;
      s.push(s.shift());
  }
  return cnt;
}