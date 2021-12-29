"use strict"; // modern coding

// 1. Inheritance, Polymorphism (상속, 다형성)
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 오버라이딩 해도 부모 class 메소드 호출
    console.log(`📐`);
  }

  // 오버라이딩(다형성)
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, `blue`);
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, `red`);
triangle.draw();
console.log(triangle.getArea());



// 2. instanceOf - Class checking

console.log(rectangle instanceof Rectangle); // > true
console.log(triangle instanceof Rectangle); // > false
console.log(triangle instanceof Triangle); // > true
console.log(triangle instanceof Shape); // > true
console.log(triangle instanceof Object); // > true