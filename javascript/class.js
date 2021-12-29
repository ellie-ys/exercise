"use strict";
// Object-oriented programming
// **class**: template
// **object**: instance of a class

// class person{
//     name; // 속성(fields)
//     age; // 속성
//     speak();  // 행동(methods)

// }

// 1. Class declarations

class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    //this 생성된 object의 name
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20); // 인스턴스(object) 생성
console.log(ellie.name); // > ellie
console.log(ellie.age); // > 20

console.log(ellie, typeof ellie); // > Person {name: "ellie", age: 20} "object"
ellie.speak(); // > ellie: hello!

// 2. Getter & Setter

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //getter를 정의하는 순간,
    // 요 this.age는 getter 호출
    //setter 정의하는 순간
    // = age; 는 setter 호출
    // --> getter, setter 호출이 무한 반복되는 것 방지
    //// 생성자 필드명 앞에 _ 를 붙이는게 관습
  }
  // getter : 값 리턴
  get age() {
    return this._age;
  }
  //setter : 값 설정
  set age(value) {
    // if (value < 0) {
    //     //-값주면 안된다!
    //   throw Error(`age can not be negative.`);
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User(`Steve`, `job`, -1); // set
console.log(user1.age); // get

// 3. Field

class Experiment {
  publicField = 2; // 그냥 정의하면 public
  #privaterField = 0; // #(해쉬) 기호를 붙이면 class 내부에서 값 접근, 변경 가능.
}
const experiment = new Experiment();
console.log(experiment.publicField); // > 2 : 접근 가능
console.log(experiment.privaterField); // > undefined : 접근 불가능

// 4. Static properties and methods

class Article {
  // static 필드 : object( 들어오는 data )와 상관없이 class 에서 쓸 수 있는 것
  // 고유 값, 데이터 상관없이 동일하게 반복되게 사용되어지는 method 
  // object마다 값이 할당되는 게 아니라, class 마다

  static publisher = "Dream Coding";

  static printPublisher() {
    // static 메소드 정의
    console.log(`print: ${Article.publisher}!!`);
  }
}

const article1 = new Article();
console.log(article1.publisher); // >  object안에 publisher  :undefined
console.log(Article.publisher); // > Dream Coding
Article.printPublisher(); // > print: Dream Coding!!




// 캡슐화
// class 안에서도 내부적으로 보이는 변수, 밖에서 보일 수 있는 변수 나눔

// 객체지향
// 수많은 물체와 사물 class, object로 정의
// 문제나 , 구현 객체로 잘 정의해서 만들기
// class 이용해서 상속과 다양성 일어날 수 있음.

// Class
// template : object(인스턴스)를 만들 수 있는 틀
// declare once
// no data in
// 실제 메모리에 올라가지 않음
// 좀 더 연관있는 data를 묶어 놓는 container역할

// Object
// instance of a class
// created many times
// data in
// added in ES6
// Object-oriented programming
