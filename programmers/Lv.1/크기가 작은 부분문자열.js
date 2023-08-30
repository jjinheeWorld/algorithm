function solution(t, p) {
  let subNum = cnt = 0;
  let pLen = p.length;
  for (let i = 0; i < t.length; i++) {
      subNum = t.substr(i, pLen);
      if (subNum.length === pLen) {
          if (subNum <= p) cnt++;
      }
  }
  return cnt;  
}