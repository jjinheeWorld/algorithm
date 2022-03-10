/* 생성자 함수
  유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어에서의 class 개념과 유사)
  일반적으로 생성자 함수의 첫 글자는 대문자로 시작
  생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성
*/

// 빵틀
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}
// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
// output: FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2);
// output: FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3);
// output: FishBread { flavor: 'milk', price: 1500, base: 'flour' }

/* new.target
  new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능
*/
function User(name) {
  console.log(new.target);
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let result_1 = User("jinhee");
console.log(result_1);
// output: User { name: 'jinhee' }
let result_2 = new User("jinhee");
console.log(result_2);
// output: User { name: 'jinhee' }
