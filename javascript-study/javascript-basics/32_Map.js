/* Map
  다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능할 수 있는 Collection
  Map은 Object 대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요함
*/

/* 요소 추가/삭제
  요소 추가 : Map.set(key, value), 요소 접근 : Map.get(key), 요소 전체 삭제 : Map.clear()
  다양한 자료형을 key로 사용 가능하며, map.set 호출 시 map이 반환되므로 체이닝(chaining) 가능
*/

let map = new Map();

map.set("name", "jinhee"); // string key
map.set(123, 456); // number key
map.set(true, "bool_type"); // boolean key

console.log(map); // output: Map(3) { 'name' => 'jinhee', 123 => 456, true => 'bool_type' }
console.log(map.get(123)); // output: 456
console.log(map.get("name")); // output: jinhee
console.log(map.get(true)); // output: bool_type
console.log(map.size); // output: 3

map.delete(123);
console.log(map); // output: Map(2) { 'name' => 'jinhee', true => 'bool_type' }

// chaining
map.clear();
console.log(map); // output: Map(0) {}
map.set(123, 789).set(false, "bool_type").set("fruit", "banana");
console.log(map);
// output: Map(3) { 123 => 789, false => 'bool_type', 'fruit' => 'banana' }

/* Map 반복문
  Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능
*/

let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let item of recipe_juice.keys()) {
  console.log(item);
}
// output: strawberry banana ice

for (let amount of recipe_juice.values()) {
  console.log(amount);
}
// output: 50 100 150

for (let entity of recipe_juice) {
  console.log(entity);
}
// output: [ 'strawberry', 50 ] [ 'banana', 100 ] [ 'ice', 150 ]

console.log(recipe_juice);
// output: Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
console.log(recipe_juice.entries());
/* output
[Map Entries] {
  [ 'strawberry', 50 ],
  [ 'banana', 100 ],
  [ 'ice', 150 ]
}
*/

/* Map <-> Object 변환
  Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object 간 변환이 가능
*/

console.log(recipe_juice);
// output: Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj); // [key, value]
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice_obj);
// output: { strawberry: 50, banana: 100, ice: 150 }
console.log(recipe_juice_kv);
// output: [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
console.log(recipe_juice_map);
// output: Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
