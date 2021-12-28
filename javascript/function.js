// function
// fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculates a value

// 1.  function declaration
// - 기본 형태: function name(param1, param2) { body... return; }
// - 하나의 function에는 하나의 기능만
// - 네이밍:  명령어, 동사 형태
// - e.g. createCardAndPoint → createCard, createPoint 두 개의 함수로 나누기

// - function is object in JS (JS에서 function은 객체임)
//         -> 따라서 변수로 할당, parameter로 전달, 함수를 return도 가능
function printHello() {
  console.log("Hello:)");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello");

// JS
("use strict");
function log(msg) {
  console.log(msg);
  return 0;
}
log("Hello");

// TS :파라미터의 타입과 리턴의 타입을 명시
//https://www.typescriptlang.org/play
// function log(msg: string): number {
//   console.log(msg);
//   return 0;
// }

// 2. parameters
// primitive parameters: passed by value (값으로 전달) :메모리에 값이 저장되어 있음
// object parameters: passed by reference (참조로 전달)
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // > {name: "coder"}

// 3. default parameters (added in ES6)
// 사용자가 parameter를 전달하지 않을때, 지정되어있던 기본 값 사용해줌
function showMessage(msg, from = "unknown") {
  console.log(`${msg} by ${from}`);
}
showMessage("Hi!!");

// 4. rest parameters (added in ES6)
// 배열 인자를 받을 때 유용

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]); // > dream, coding, ellie, good : 순서대로 출력됨.
  }

  // for (const arg of args) {
  //   console.log(arg);
  // }

  // args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie", "good");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = "global"; // global 변수
function printMessage() {
  let message = "hello"; // local 변수
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //function에 return이 없으면, 알아서 undefined을 return 함.
  return undefined; //요게 생략된 것
  // console.log(childMessage);
  // > error : Uncaught ReferenceError: childMessage is not defined
}
printMessage();

// 6. return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // > 3
console.log(result);

// 7. early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  } else {
    return;
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; //조건이 맞지 않을 때, 함수종료
  }
  // long upgrade logic ...
  // 조건이 맞을 때만 실행.
}
// function 내부에서는 조건이 틀릴때, 리턴(종료) 하게 코드를 짜는게 가독성에 좋음.

// * First-class function
// function이 변수처럼 취급
// 변수에 값으로 할당 가능
// 다른 function에 인수로 전달 가능
// 다른 function에 의해 반환 가능

// 1. function expression
// 함수 선언은 정의 된 것보다 더 일찍 호출 될 수 있습니다. (호이스팅됨)
// 함수 표현식은 실행이 도달하면 생성됩니다. (정상적)
// print(); // > error : 당연히 선언 전에 호출하니 error 발생!
const print = function () {
  // 함수를 선언함과 동시에 변수에 할당
  // 익명  anonymous function   cf. named function
  console.log("print");
};
print(); // > print
const printAgain = print; // print2 변수는 print 변수와 같은 메모리 주소의 function을 바라보고 있음
printAgain(); // > print

// console.log(sum(1, 3)); // > 4 : 함수 호이스팅되서 error 발생 안함.
function sum(a, b) {
  // 함수 선언식
  return a + b;
}
const sumAgain = sum; // 선언한 함수도 변수에 할당 쌉가능
console.log(sumAgain(1, 3)); // > 4

// 2. callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// 스택 추적 디버깅 할 때 더 나은 방법
// 재귀
const printNo = function print() {
  console.log("no!");
  // print(); // 재귀
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// 3. arrow function
// always anonymous
// 함수형 프로그레밍인 배열/리스트에 good
const simplePrint = function () {
  consloe.log("simplePrint!");
};

//위의 세줄이 아래 한 줄과 같다  arrow function의 간결성

const simplePrint = () => console.log("simple~!!");
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// 4.  IIFE (Immediately Invoked Function Expression)
// 요즘엔 사용 잘 안함 ㅋㅋ
// 즉시 호출 된 함수 표현식 / 즉시 호출 함수 바로 실행하고 싶을 때
(function hello() {
  console.log("IIFE");
})(); // 즉시 호출
