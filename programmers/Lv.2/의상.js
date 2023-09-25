function solution(clothes) {
  const clothesMap = new Map();
  // 각 의상의 종류별로 개수를 카운트한다.
  for (const [name, type] of clothes) {
    if (!clothesMap.has(type)) clothesMap.set(type, 1);
    else clothesMap.set(type, clothesMap.get(type) + 1);
  }
  // 각 종류별로 선택하지 않는 경우를 포함하여 조합의 수를 계산한다.
  let answer = 1;
  for (const cnt of clothesMap.values()) {
    answer *= cnt + 1;
  }
  // 모든 종류에서 아무것도 선택하지 않는 경우 1을 빼준다.
  return answer - 1;
}
