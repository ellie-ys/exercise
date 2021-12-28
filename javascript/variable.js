// 1. Use strict
// added in ES5
// use this for Vanilla Javascript.
"use strict";

// 2. Variable      (rw:read write)
// let (added in ES6) : mutable data type
// Block scope
// global변수는 최소한으로 사용하는게 좋다.
// 가능한 class나 function , if나 for loop에서 정의해서 사용하는게 좋다.
let globalName = "global name"; 

{
  let name = `ellie`;
  console.log(name); // > ellie
  name = `hello`;
  console.log(name); // > hello
}

console.log(name);
console.log(globalName); 


// ECMAScript 5 까지는 var  (don;t ever use this)
// var hoisting (변수를 어디에 선언했느냐에 상관없이 선언을 가장 위로 끌어 올려주는 것)

console.log(age); // > undefined
age = 4; //값 먼저 사용...
console.log(age); // > 4
var age; // 그리고 age 변수 나중에 선언 

// has no block scope (블록 범위가 없음)
// 블록 안에 변수를 선언해도 아무대서나 사용이 가능함, 스코프 무시
// 규모있는 프로젝트에서는 선언하지도 않은 값 할당되어도 모르고 
{
	var age = 4;
}
console.log(age); // > 4 

// 3. Constant   r(read only)
// 값 선언, 할당한 동시에 값 변경 불가능하다.
// immutable data type 사용 장점


const maxNumber = 5;
// maxNumber = 111; // > error : Uncaught TypeError: Assignment to constant variable.


// Note ! 
// Immutable data types: primitive types, frozen objects
// Mutable data types: all objects in JS



// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// 변수 primitive, object 인지에 따라 메모리에 다른 방식으로 저장된다.
// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container : 너무 커서 메모리에 한 번에 올라갈 수 없다.reference가 있다. 실제로 object 담겨있는 메모리 가리킴.
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
// 값에 상관없이 number 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = `not a number` / 2;
console.log(infinity); // > Infinity
console.log(negativeInfinity); // > -Infinity
console.log(nAn); // > NaN

// bigInt( fairly new, dont't use it yet)
// 숫자 끝에 n만 붙히면 bigInt로 간주되어 진다.
// chrome, firefox에서만 지원됨 -> ms edge도 지원되네?
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53~ 2**53)
console.log(`value: ${bigInt}, type:${typeof bigInt} `);
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); 
const hellobrendan = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${hellobrendan}, type: ${typeof hellobrendan}`);





// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 아무런 값이 할당되어도 되고 
// let x = undefined <- 이렇게 아예 undefined라고 적어줘도 된다.
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// 나중에 map이나 동시다발적으로 일어나는 코드에 고유 식별자가 필요할 때  사용함. 
// - create unique identifiers for objects (개체에 대한 고유 식별자 생성)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // > false : 동일한 string으로 작성해도 다른 symbol로 만들어짐

// - string 이 같을떄 동일한 심볼을 만들고 싶으면.. symbol에 .for추가
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // > true 
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // > error
// symbol은 .description 추가해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`); 

// object
// 일상생활 물건, 물체 대표하는 박스형
// - real-life object, data structure
const ellie = { name: `ellie`, age: 20 };
ellie.age = 21; // 변경 가능
// ellie = { name: `gunwoo`, age: 28 }; // > error : Uncaught TypeError: Assignment to constant variable.
console.log(ellie);





// 5. Dynamic typing: dynamically typed language
// 선언할 때 어떤 타입인지 선언하지 않고 런타임에 할당된 값에 따라 타입 변경
// cf) C, JAVA - statically typed language

let text = `hello`;
console.log(text.charAt(0)); // > h
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
text = `7` + 5;
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = `8` / `2`;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
// console.log(text.charAt(0)); // > error : Uncaught TypeError: text.charAt is not a function

// JS는 런타임에서 타입이 정해지니, error가 runtime에서 많이 발생
// 그래서 나온게 TypeScript  (javascript위에 type 올려진 언어)
