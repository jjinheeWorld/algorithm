function solution(s) {
  s = s.toLowerCase().split(' ').map(word => {
      if (/^[a-z]/.test(word)) {
          return word.replace(/^[a-z]/, str => str.toUpperCase());
      } else {
          return word;
      }
  });
  return s.join(' ');
}