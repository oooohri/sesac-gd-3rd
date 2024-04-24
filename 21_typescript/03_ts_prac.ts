let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame[1] = false;
// -----------------------------------------------

// interface
console.log("----------interface------------");

// 개발자가 직접 정의한 객체의 상세 타입을 interface로 선언
interface Student {
  name: string;
  isPassed: boolean;
}
// 주석처리한 이유 : 아래에서 Student interface를 확장했기 때문에 age 키가 없는 student1은 에러 발생

// const student1: Student = {
//   name: "layla",
//   isPassed: true,
//   // age: 1,  // Student interface 선언 시 age키는 없었으므로 에러 발생
// };

// interface 확장
// extends 키워드 필요 없이 확장할 interface에 추가할 key와 해당 value의 타입 작성
interface Student {
  age: number;
}

// 위에서 선언한 Student interface에서 age키도 추가해야 에러가 나지 않음
const student1: Student = {
  name: "layla",
  isPassed: true,
  age: 1,
};

// interface 상속
interface BaseballPlayer extends Student {
  readonly position: string;
  height: number;
  backNumber?: number; // 있어도 없어도 문제 없는 옵셔널한 키 지정
}

const 류현진: BaseballPlayer = {
  name: "류현진",
  isPassed: true,
  age: 37,
  position: "투수",
  height: 183,
  backNumber: 1,
};
console.log(류현진);

const 이정후: BaseballPlayer = {
  name: "이정후",
  isPassed: false,
  age: 27,
  position: "외야수",
  height: 185,
  // backNumber 작성하지 않아도 에러 발생하지 않음
  // -> ? 사용해서 옵셔널한 키로 지정했기 때문
};
// 이정후.position = "타자";  // position key의 value는 readonly이기 때문에 수정 불가
이정후.isPassed = true; // 이외 key의 value는 수정가능

// ------------------------------------------------------------------------------------
// type
console.log("-----type-----");

type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface HighSchoolStudent extends Student {
  // name, isPassed, age key의 타입은 이미 지정 됨
  score: Score;
  // key의 값을 해당 interface를 사용하는 객체를 선언할 때 지정하는 경우
  // key를 지정하지 않은 상태에서 해당 key의 타입을 지정할 수 있음
  // grade는 학년
  [grade: number]: Score;
}

const chulsu: HighSchoolStudent = {
  name: "철수",
  age: 17,
  isPassed: false,
  score: "A+",
  1: "B", // [grade: number]: Score;
};

const abj2: object = {
  name: true,
  age: [1, 2, 3],
};

// name 키의 value는 무조건 string
// age 키의 value는 무조건 number

// 사용자가 직접 타입을 정의할 수 있음
// interface와 type

interface Person {
  name: string;
  age: number;
}
// interface로 선언한 무언가는 앞으로 string, number, boolean과 같은 하나의 타입이 됨
// 개발자가 직접 만든 타입

// name과 age 키의 value가 string, number 타입이 아니어도 에러 X
const person1: object = {
  name: "행인1",
  age: 2,
};

// name과 age 키의 value가 string, number 타입이 아니어도 에러 O
const person2: Person = {
  name: "행인2",
  age: 3,
};

// 옵셔널한 key
// key 뒤에 ? 작성 시 해당 interface 사용할 때 그 key는 없어도 에러 Xd
interface Person2 {
  name: string;
  age?: number;
}

const person3: Person2 = {
  name: "행인2",
};

// readonly
// 해당 key의 value는 선언 이후 수정 불가
// 원래 객체의 key의 value는 const로 선언해도 수정할 수 있음
// readonly 객체의 key의 value를 수정할 수 없음 -> 상수화
interface Person3 {
  readonly name: string;
  age: number;
}

const person4: Person3 = {
  name: "행인4",
  age: 4,
};

// person4.name = '행인5'; // error

// 객체의 접근법
console.log(person4.age); // 점 접근법
console.log(person4["age"]); // 대괄호 접근법

// interface로 작성한 타입에서 key를 객체 선언할 때 입력할 수 있도록 하고,
// 그 key의 타입을 제한하는 경우
interface Person4 {
  name: string;
  age: number;
  [grade: number]: string;
}

const person5: Person4 = {
  name: "행인5",
  age: 4,
  1: "A+",
};

// 대괄호 접근법으로 number 타입 key의 value 접근 가능
console.log(person5[1]);

// ---------------------------------------------------------
// 함수 interface
console.log("--------------------함수 interface--------------------");

interface Calc {
  // 소괄호는 해당 함수의 인자와 인자의 타입 작성
  // 소괄호 다음의 콜론에는 반환값의 타입을 작성
  (a: number, b: number): number;
}

const sum: Calc = (a, b) => {
  return a + b;
};

// interface 사용하지 않고 선언하는 함수
// 인자에 바로 해당 인자의 타입을 작성하고, 인자 뒤에 리턴 값의 타입을 작성
const sum2 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2));
// console.log(sum(1, "2")); // js였다면 콘솔에 '12'

// -------------------------------------------------------------
// type
console.log("----------------type----------------");

// type 사용해 객체의 타입 지정
type Toy = {
  name: string;
  price: number;
};

const barbie: Toy = {
  name: "barbie",
  price: 34000,
};

// 값을 완전 특정짓는 type 생성
type Gender = "female" | "male";
const layla: Gender = "female";
// const lily: Gender = "Female"; // error
// type Gender = "none" // interface처럼 확장 불가능

// 값의 타입을 제한하는 type 생성
type Name = string;
const laylaName: Name = "layla";
type NumAndStr = number | string;
const numAndStrVal1: NumAndStr = 1;
const numAndStrVal2: NumAndStr = "2";

// interface vs type
/*
interface
    - 주로 객체의 타입을 지정할 때 사용
    - 확장 가능 (그냥 interface 선언하듯이 추가 key 작성)
    - 상속 가능 (extends 키워드 사용해서 해당 interface 가져오고, 새로운 interface 만듦)
*/
/*
type
    - 훨씬 자유롭게 사용
    - 해당 타입의 value를 제한할 수 있음
    - 타입의 확장 불가
*/
