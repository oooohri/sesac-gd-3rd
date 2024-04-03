/*
    commonjs에서 모듈 사용을 위해
    package.json 파일에 "type" : "commonjs"를 추가해야 함 
    
    npm init 명령어를 통해 자동으로 해당 프로젝트의 package.json 생성가능 

    cjs 확장자는 commonjs를 사용하는 파일이라는 것을 알림
*/

// 01_module01.cjs 사용
const person = require("./01_module01.cjs");
// 01_module01에서 exports한 모든 데이터가 person에 저장됨
console.log(person);
// node에서 해당 파일 실행 : node 01_module_require.cjs
/*
{
  colors: [ 'pink', 'blue', 'yellow' ],
  sayName: [Function: sayName],
  Person: [class Person]
}
*/
// Person에 저장된 변수, 클래스, 함수 사용
// 변수 사용
console.log(person.colors); // [ 'pink', 'blue', 'yellow' ]
// 함수 사용
console.log(person.sayName("장원영")); // my name is 장원영 이 함수는 sayName함수 입니다. 안녕하세요! 이 함수는 sayhi함수 입니다.
// 클래스 사용
const chaewon = new person.Person("채원", 20);
console.log(chaewon); // Person { name: '채원', age: 20 }
console.log(chaewon.getBornYear(20)); // 2004

// 가져오고 싶은 변수,함수,클래스만 가져오기
// 구조 분해 할당 사용
const { sayName } = require("./01_module01.cjs");
sayName("안유진"); //  my name is 안유진 이 함수는 sayName함수 입니다. 안녕하세요! 이 함수는 sayhi함수 입니다.

// -------------------------------------------------------------------------------------------
// 01_module02.cjs 사용
// const colors2 = require("./01_module02.cjs");
// const sayName2 = require("./01_module02.cjs");
// console.log(colors2);
// console.log(sayName2.sayName2("강동원"));

// // 줄인코드
// const module2 = require("./01_module02.cjs");
// console.log(module2.colors2);
// console.log(module2.sayName2("강동원"));

// 구조분해할당
const { sayName2, colors2 } = require("./01_module02.cjs");
console.log(colors2);
sayName2("강동원");
