/*
    Js 표준 내장 객체
        자바스크립트가 기본적으로 갖고 있는 객체
        String, Number, Array, Date, Math ...
 */

// * 1. Date 객체
// 시간, 날짜에 대한 정보를 얻기 위해

// 현재 날짜
let now = new Date();
console.log(now);

// 1000ms === 1s
// 1000ms * 3600 = 1000ms * 60 * 60 === 1s * 60 * 60 = 1h
// 1000ms * 3600 * 24 === 24h

// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24); // 1000 * 3600 * 24 : 24시간 뒤
console.log(Jan_02_1970);

// new Date(year, month, day, hour, minutes, seconds, ms)와 같이 매개변수 입력하면 해당 날짜에 관한 것들 반환
// year : 4자리
// month : 0(1월) ~ 11(12월)
// date : 1 ~ 31 / Date 값이 없으면(작성안하면) 1로 처리
// hour, minutes, seconds, ms : 값이 없으면 0으로 처리
console.log(new Date(2021, 2, 15, 18, 30, 15));

// Date 객체 메서드
// 연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // Number타입 (년도 4자리)
console.log(now.getFullYear() + "년"); // 문자열타입
console.log(now.getMonth()); // 월 (0 ~ 11)
console.log(now.getDate()); // 일
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 밀리초
console.log(now.getDay()); // 요일 (0 ~ 6) 일요일이 0

// date 객체 사용해 오늘 요일 얻기 (if,switch)
if (
  now.getDay() === 1 ||
  now.getDay() === 2 ||
  now.getDay() === 3 ||
  now.getDay() === 4 ||
  now.getDay() === 5
) {
  console.log("평일");
} else {
  console.log("주말");
}

let today = now.getDay();
if ((today = 1)) {
  console.log("평일입니다.");
} else if ((today = 2)) {
  console.log("평일입니다.");
} else if ((today = 3)) {
  console.log("평일입니다.");
} else if ((today = 4)) {
  console.log("평일입니다.");
} else if ((today = 5)) {
  console.log("평일입니다.");
} else if ((today = 6)) {
  console.log("주말입니다.");
} else if ((today = 0)) {
  console.log("주말입니다.");
}
switch (today) {
  case 1:
    console.log("평일");
    break;
  case 2:
    console.log("평일");
    break;
  case 3:
    console.log("평일");
    break;
  case 4:
    console.log("평일");
    break;
  case 5:
    console.log("평일");
    break;
  case 6:
    console.log("주말");
    break;
  case 7:
    console.log("주말");
    break;
}
// 함수하나 만들음 (return문 사용했기 떄문에)
// function checkWeekend() {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     return "평일;";
//    break; // return 작성 시 break 키워드 작성하지 않아도 알아서 해당 스코프 빠져나감
//   case 6:
//   case 7:
//     return "주말;";
//   default:
//     return "알수없음";
//      }
// }
// console.log(checkWeekend()); // chW 함수의 반환값을 콘솔에 출력

// 3. 삼항연산자
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";

// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(10, 2, 6, -50)); // 최소값: 인자로 전달받은 값 중 최소값
console.log(Math.max(10, 2, 6, -50)); // 최대값: 인자로 전달받은 값 중 최대값
console.log(Math.random()); // 0 <= x < 1 난수 생성
console.log(Math.round(3.4)); // 3 -> 소수를 반올림하여 정수로 변환
console.log(Math.floor(3.4)); // 3 -> 소수를 내림하여 정수로 변환
console.log(Math.ceil(3.4)); // 4 -> 소수를 올림하여 정수로 변환

// Math.random() 응용
// 곱하는 수 : 원하는 범위 숫자 + 1

// 0 ~ 9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));
// 0 ~ 10 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

// 1 ~ 100 사이의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1);

// 20 ~ 22 사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20);
