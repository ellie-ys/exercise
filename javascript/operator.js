// 1. String concatenation (문자열 연결)
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:
'''''
1 + 2 = ${1 + 2}`);
console.log("ellie's \n\tbook");

// 2. Numeric operators (숫자 연산자)
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);
// 3. increment and decrement operators
// ++ / --
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // > 3, 3 : 바로 업데이트 되서 할당

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // > 3, 4 : 할당 해놓고 업데이트

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // > 3, 3 : 바로 업데이트 되서 할당

const postDecrement = counter--;
// postDecrement = counter;   3
// counter = counter - 1;     2
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // > 3, 2 : 할당 해놓고 업데이트

// 4. Assignment operators  (= operators)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (<= operators)
console.log(10 < 6); // less than > false
console.log(10 <= 6); // less than or equal  > false
console.log(10 > 6); // greater than > true
console.log(10 >= 6); // greater than or equal > true

// 6. Logical operators (||, &&, !)
// 연산량이 많은 함수를 뒤 쪽에 배치시키는게 효율적
const value1 = true;
const value2 = 4 < 2; // > flase

// || (or)
// finds the first truthy value
// 아래 3개중에 1개라도 true 되는 애 있음 -> true
console.log(`or: ${value1 || value2 || check()}`); // > value1에서 멈춤

// && (and)
// 세 개가 다 true 여야 true return
// 첫 번째 false 값을 찾음 -> false

console.log(`or: ${value1 && value2 && check()}`); // > value2에서 멈춤

// and operator는 null check할때도 많이 사용
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("♬");
  }
  return true;
}

// ! (not)
console.log(!value1); // > false

// 7. Equality Operators (==, ===)
const stringFive = "5";
const numberFive = 5;

// == loose 느슨한 equality, type 변환 포함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict엄격한 equality, type 변환 없음 (favor)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference(주소)
const ellie1 = { name: "ellie", age: 20 };
const ellie2 = { name: "ellie", age: 20 };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // > false
console.log(ellie1 === ellie2); // > false
console.log(ellie1 == ellie3); // > true
console.log(ellie1 === ellie3); // > true
// object는 메모리에 탑제 될 때, 주소가 저장되므로 같은 data를 할당 해도 비교시 false가 된다

// 8. Conditional operator : if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operators : ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");
// 조건이 true면 ':' 기준 왼쪽 값 출력, false면 오른쪽 값 출력

// 10. Switch operators
// use for multiple if checks
// use for enum-like(열거형) value check
// use for multiple type checks in TS

const browser = `IE`;
switch (browser) {
  case `IE`:
    console.log(`go away!`);
    break;
  case `Chrome`:
  case `Firefox`:
    console.log(`love you!`);
    break;
  default:
    console.log(`some all!`);
    break;
}

// 11. while loop
// 조건이 맞을때만 블럭을 시작
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 12. do while loop
// 먼저 블록을 실행한 뒤에 조건이 맞는지 안맞는지.
// {} 안에 코드가 한 번 실행 되고 조건을 체크함
let i = 3;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 13. for loop
// begin 한 번만 호출하고, 블록 실행하기 전 컨디션 맞는지 검사, 블록실행하고 나면 그 다음 동작
// for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
  // 인라인 변수 선언 블럭안에 let 지역변수 선언해서 작성 GOOD!
  console.log(`inline variable for: ${i}`);
}

// 14. nested  loops  - big o 가 n 의 2승이다. cpu에 좋지 않다
// while , for 는 nested 작성가능
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, i:${i}`);
  }
}

// 15. continue, break
// continue 사용. 짝수만 출력
// for (let i = 0; i < 11; i++){
//     if (i % 2 !== 0){
//         continue;
//     }
//     console.log(`q1. ${i}`);
//     }

// 사실, continue 사용보다 원하는대로 출력이 - better
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}

// break
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
