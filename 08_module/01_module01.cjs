// commonjs
// 한 번에 module.exports 시키기
const colors = ["pink", "blue", "yellow"];
const sayhi = function () {
  console.log("안녕하세요! 이 함수는 sayhi함수 입니다.");
};
function sayName(name) {
  console.log("my name is " + name + " 이 함수는 sayName함수 입니다.");
  sayhi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}
// 다른 파일에서 사용하지 않는 경우 굳이 export 하지 않는다.
module.exports = { colors, sayName, Person };
