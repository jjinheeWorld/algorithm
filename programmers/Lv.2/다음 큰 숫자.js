function solution(n) {
  let nOnes = n.toString(2).split('0').join('').length;
  let currOnes = 0;
  while (nOnes !== currOnes) {
    n++;
    currOnes = n.toString(2).split('0').join('').length;
  }
  return n;
}
