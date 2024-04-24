// tuple : 갯수와 데이터 타입, 순서가 정해져 있는 배열
let drink: [string, number] = ["아메리카노", 4500];
// drink = ["라떼", 5100, true] // error -> 요소의 길이는 2, 문자열 숫자 순서로 배열이 선언되어야 하기 때문
drink[0] = "라떼"; // 배열의 요소의 인덱스를 통해 접근 가능
// drink[0] = 5100; // 정해진 타입이 아니면 수정 불가능
drink.push("push 될까요?");
console.log(drink); // push 가능
// drink[3] = "수정은?" // 타입을 미리 지정하지 않은 요소에 수정 불가능

// spread 연산자 사용
console.log(...drink); // 배열이 각자 요소가 떨어져서 출력 -> 라떼 4500 push 될까요?

// readonly
// 길이를 특정하고, 타입과 순서를 "완벽히" 고정 시키기 위해 사용
let drink2: readonly [string, number] = ["바나나우유", 2000];
// drink2[0] = "딸기우유"; // 요소 값 수정 불가
// drink2.push("안됩니다!") // push도 불가

// ---------------------------------------------------------------------------------------------------------
console.log("----------enum------------");

// 회원 권한 enum으로 정의
enum Auth {
  admin = 0, // 관리자 계정은 0
  user = 1, // 회원가입 한 계정은 1
  guest = 2, // 회원가입 하지 않은 계정은 2
}

// enum은 객체가 아니지만 점접근법으로 접근할 수 있음
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

const userType: number = 2;
if (userType !== Auth.admin) {
  console.log("관리자 권한이 없습니다.");

  if (userType !== Auth.user) {
    console.log("게스트 계정입니다.");
  }
}

// enum 값 자동 할당
enum productType {
  food,
  cloth,
  shose,
}

console.log(productType.food); // 0
console.log(productType.cloth); // 1
console.log(productType.shose); // 2

// 문자형 enum
enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}
// enum의 경우 같은 타입으로 작성해주는 것이 좋음
enum cola {
  coca, // 0
  pesi, // 1
  zero, // 2
  sprite = "스프라이트", // 숫자와 문자열 같이 사용할 수 있음
}

// -------------------------------------------------------------
// any : 어떤 데이터 타입이든 상관없이 오류 발생하지 않음
// js의 변수를 선언하고 사용할 때와 동일하게 마음대로 값을 할당하고 수정할 수 있음
// any를 사용하는 경우 ts를 사용하는 의미가 사라짐 -> any 타입 사용을 지양
// 하지만 빈 배열을 먼저 선언할 때, 받아오는 데이터타입이 확실하지 않을 때,
// 할당해야 하는 타입을 모를 때 (외부 라이브러리 사용 등) 사용하게 됨
console.log("----------any-----------");

let myVal: any = 1;
console.log(myVal);
myVal = "문자열로 바꿀거지롱~";
console.log(myVal);
myVal = [
  1,
  2,
  3,
  "이번엔 배열로~",
  true,
  4,
  5,
  6,
  ["배열안에 배열", null, { name: "배열안에 배열안에 객체" }],
  null,
  { name: "이번에는 배열안에 배열안에 객체를 가진 요소 다음 객체" },
];

console.log(myVal);
