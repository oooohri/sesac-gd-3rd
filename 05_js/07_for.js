console.log("connected");
console.log("------------------------");

// * for문
/*
for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 작성); 증감) {
    반복할 코드
}
*/
// i + 1 = i += 1 / i++       => 모두 동일함
// i - 1 = i -= 1 / i--       => 모두 동일함
// i++ : 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i-- : 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5식 늘림
// const로 선언 불가능
for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
  console.log(`안녕 ${i}`);
}
console.log("------------------------");
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
console.log("------------------------");
// 1부터 5까지 출력하는 방법
// 1. i <= 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("------------------------");
// 2. i < 6
for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log("------------------------");
// 3. 5부터 1출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("------------------------");

// ? 퀴즈. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}
console.log("result :", result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ["americano", "latte", "espresso", "tea"];
console.log(cafe.length); // 배열의 길이를 출력

for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu", cafe[i]);
  //   i=0일때 반복 cafe[0]
  //   i=1일때 반복 cafe[1]
  //   i=2일때 반복 cafe[2]
  //   i=3일때 반복 cafe[3]
  //   i=4일때 반복하지 않아요! -> i가 4이기 때문 -> 조건식이 false여서 for문 종료
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  // numSum = numSum + numArr[i];
  numSum += numArr[i];
  console.log(numSum);
}
console.log(numSum);

// * for문과 if문 함께 사용
// 짝수만 출력

// 1.for문만 사용
for (let i = 2; i < 10; i += 2) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.clear();

// 2단 출력
// sum = 0;
// for (let i = 1; i < 10; i++) {
//   sum2 = 2 * i;
//   console.log(`2 * ${i} = ${sum2}`);
// }

// 방법 2
// const number = Number(prompt("구구단을 계산할 숫자를 입력해주세요."));
// console.log(number + "단");
// for (let i = 1; i < 10; i++) {
//   console.log(number + " * " + i + " = " + number * i);
//   console.log(`${number} * ${i} = ${number * i}`);
// }
console.log("---------------------");
// 이중 for문
for (let i = 0; i < 5; i++) {
  console.log("i : ", i);

  for (let j = 0; j < 10; j++) {
    console.log(`현재 i는 ${i}이고, j는 ${j}이다.`);
  }
}
console.log("---------------------");
// 1단부터 9단까지
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    sum = i * j;
    console.log(`${i}단 : ${i} * ${j} = ${sum}`);
  }
}

// * while문
/*
while (조건) {
    조건에 만족하는 동안 실행될 코드
}
*/
// 조건을 제어하는 구문이 없기 때문에 무한루프에 빠지지 않도록 주의해서 사용
console.log("-----------while-------------");
let num = 1;
while (num <= 5) {
  console.log(num);
  num++; // 없으면 무한루프에 빠진다.
}

console.log("----------------------------");
// while을 사용해 9부터 4까지 콘솔에 찍기
num = 9;
while (num >= 4) {
  console.log(num);
  num--; // 없으면 무한루프에 빠진다.
}
console.log("----------------------------");
// while문 사용해 1부터 10까지 짝수 출력
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
console.log("----------------------------");
// 퀴즈. while문 사용해 10부터 1까지 홀수 출력
num = 10;
while (num >= 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num--;
}
console.log("----------------------------");
// 무한루프 -> 조건식이 참이면 무한히 while문을 빠져나올 수 없음
let num2 = 0;
while (true) {
  console.log(num2);
  num2++;

  //   break; // break없다면 무한루프 또는 빠져나가야 할 조건을 설정
  //  num2가 11이 되는 순간 아래의 조건이 참이 되면서 while문 종료
  if (num2 > 10) {
    break;
  }
}

console.log("----------------------------");
num2 = 0;
while (confirm("계속 할까요?")) {
  // confirm : 확인/취소 버튼이 있는 알림창
  // confirm의 확인 버튼은 true, 취소 버튼은 false를 반환
  // 취소 버튼 클릭 시 조건이 false가 되어 반복문 종료
  num2++;
  alert(`${num2}번째 alert창`);
}

// ? 실습 - 0~100 숫자 중 2 또는 5의 배수 총 합계 구하기
console.log("------------- 실습 :2,5배수 --------------");
//  for문
let pracSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    pracSum += i;
  }
}
console.log(pracSum);
//   while문
let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  if (pracNum % 2 === 0 && pracNum % 5 === 0) {
    pracSum2 += pracNum;
  }
  pracNum++;
}

console.log("------------- 실습 : 13배수 --------------");
// ? 실습 -13의 배수이면서 홀수 찾기
let number = 0;
while (number <= 1000) {
  if (number % 13 === 0 && number % 2 === 1) {
    console.log(number);
  }
  number++;
}
console.log("------------- 실습: 심화 -------------");
// 심화
// ? console 위치 중요
let input = Number(prompt("수를 입력하세요."));
for (i = 0; i < input; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
  }
  console.log(i);
}
// 실습 - 이중 for문을 사용해 구구단 출력
// i는 구구단의 단, j는 단에 곱해줄 수
for (let i = 2; i <= 9; i++) {
  console.log(`------${i} 단 -------`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
