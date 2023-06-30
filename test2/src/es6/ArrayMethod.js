// ArrayMethod.js

// ES6에서 배열 관련 함수가 추가됨

// forEach() : 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하는 함수, 반환값이 없음
// for ~ in 문 처럼 해당 배열의 모든 요소를 출력할 때까지 반복 실행하는 반복문

// 사용법 :
// 배열명.forEach(콜백함수 (현재값이 저장될 변수, 현재 index, 현재 배열 내용)) {
//    실행할 코드
// }

const fruits = ["사과", "배", "복숭아"];
console.log(fruits);

console.log("\n ----- for문 사용 시 -----\n");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\n ----- for ~ in 문 사용 시 ----- \n");
for (const item in fruits) {
  console.log(fruits[item]);
}

console.log("\n ----- forEach문 사용 시 ----- \n");
fruits.forEach(function (item) {
  console.log(item);
});

// fruits.forEach(
//   function (item) {
//     console.log(item);
//   }
// );

console.log("\n ------ forEach 매개 변수 여러개 사용 시 ----- \n");
fruits.forEach(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
});

console.log("--------------------------------");
fruits.forEach(function (item, index, arrName) {
  console.log(`current Array : ${arrName}, index : ${index}, value : ${item}`);
});

console.log("--------------------------------");
fruits.forEach((item, index) => {
  console.log(`index : ${index}, value : ${item}`);
});

console.log("--------------------------------");
fruits.forEach(item => console.log(`value : ${item}`));


console.log("\n ------ ----- \n");
// map() : forEach()와 같이 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하고 그 결과를 배열로 반환하는 함수
// 사용법 :
// 배열명.map(콜백함수(현재값이 저장될 변수, 현재 Index, 현재 배열 내용) {
//    실행할 소스코드
//    return 반환값
// });

const numbers = [4, 9, 16, 25];
console.log(`원본 배열 : `);
console.log(numbers);

let data = numbers.map(function (item) {
  console.log(`현재값 : ${item}`);
  return item * 2;
});

console.log("map() 사용 후 데이터 : ");
console.log(data);


console.log("\n ----- map()에서 매개변수 여러개 사용하기 ----- \n");
data = numbers.map(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
  return item * 2;
});

console.log(`map() 사용 후 : `);
console.log(data);

console.log("\n ------ ----- \n");
data = numbers.map(function (item, index, current) {
  console.log(`current Array : ${current}, index : ${index}, item : ${item}`);
  return item * 2;
});

console.log(`map() 사용 후 : `);
console.log(data);





