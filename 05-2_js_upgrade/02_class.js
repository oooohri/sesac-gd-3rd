class House {
  // constructor : 생성자 함수
  // House라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    this.name = name; // 이 클래스엔 name이라는 key를 가질 것이고, value는 생성자 함수에서 전달받은 name이다.
    this.age = age;
    this.window = window;
  }
  // 메서드
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고, ${this.age}년 건축되었습니다.`
    );
  }
  consoleWindow() {
    console.log(`${this.name}아파트의 창문은 ${this.window}개 입니다.`);
  }
}
// House 클래스를 사용해 오브젝트 만들기
const house1 = new House("고덕 그라시움", 2020, 10);
const house2 = new House("고덕 아르테온", 2010, 7);
const house3 = new House("리앤파크", 2019, 11);
const house4 = new House("고래힐", 2015, 5);
console.log(house1);
console.log(typeof house1); // object
house1.consoleInfo();

// -------------------------------------------------------------------------------
// 상속
class Apartment extends House {
  constructor(name, age, window, floor, password) {
    // super(상속받을 속성) : 인자로 작성된 부모의 속성 상속
    super(name, age, window);
    this.floor = floor; // Aprtment 클래스에서 사용할 속성
    this.password = password;
  }
  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password} 입니다.`);
  }
  // 오버라이딩 : 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window}개 이고, 총 ${
        this.floor
      }층이므로 모든 창문의 갯수는 ${this.window * this.floor}개 입니다.`
    );
  }
}

const apt1 = new Apartment("Ipark", 2017, 6, 20, 12345);
console.log(apt1);
apt1.consoleWindow(); // 새롭게 정의된 메서드 사용
apt1.consolePassword(); // 새로운 메서드 추가 가능
apt1.consoleInfo(); // 부모 메서드 그대로 사용 가능

// ? 실습 shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
// rec1 -> 인스턴스
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 실습 2 - 상속받는 클래스 만들기

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return (this.width / 2) ** 2 * this.radius;
  }
}
let cir = new Circle(3, 2, 3.14);
console.log(cir.getArea());

class Retangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return Math.sqrt(this.width) + Math.sqrt(this.height);
  }
}
let rec2 = new Retangle(4, 2);
console.log(rec2.getArea());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const tri = new Triangle(3, 4);
console.log(tri.getArea());

// 선택실습
class Retangle2 extends Retangle {
  constructor(width, height) {
    super(width, height);
  }

  // 오버라이딩
  getArea() {
    return this.width * this.height;
  }
}
class Triangle2 extends Triangle {
  constructor(width, height) {
    super(width, height);
  }
  // 오버라이딩
  getArea() {
    return this.width * this.height;
  }
}
class Circle2 extends Circle {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.width * this.height;
  }
}
const rectangle = new Retangle2(2, 4);
const triangle = new Triangle2(3, 5);
const circle = new Circle2(1, 7);

console.log(rectangle.getArea());
console.log(triangle.getArea());
console.log(circle.getArea());
