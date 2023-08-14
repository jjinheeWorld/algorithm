function solution(s) {
  let answer = '';
  answer = s.split(' ').map(str => {
      let result = '';
      for (let i = 0; i < str.length; i++) {
          if (i === 0 || i % 2 === 0) result += str[i].toUpperCase();
          else result += str[i].toLowerCase();
      }
     return result;
  }).join(' ');
  return answer;
}