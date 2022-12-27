// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 하셨다. 선생님이 가지고 있는 예산은 한정되어 있다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성해보자
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있다. 배송비는 할인에 포함되지 않는다.

function solution(m, product) {
  let answer = 0;
  let n = product.length; // 학생 수
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 오름차순 정렬
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); // 모든 상품을 각각 할인해보며 예산에서 할인된 상품의 가격을 뺀 것으로 시작한다.
    let cnt = 1; // 현재 예산으로 사줄 수 있는 선물 횟수
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break; // 상품의 가격과 배송비의 합이 남아있는 예산보다 클 경우 계산할 필요 없으므로 break 처리한다.
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
