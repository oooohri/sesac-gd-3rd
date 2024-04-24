var num = 1;
// num = "1";  // error : number타입으로 지정한 변수는 문자열로 작성불가!
num = 2;
console.log(num);
// 타입 작성하기
var str = "str";
var isTrue = true;
var undef;
var emp = null;
// 원시 타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
var isTrue2 = true;
// error : isTrue2 변수는 boolean 타입이라고 직접 작성하지 않아도
// 알아서 boolean임을 추론해 문자열로 재 할당시 에러 발생
// isTrue2 = "aa";
// array
// 요소의 갯수를 미리 명시할 필요는 없지만
// array의 요소가 어떤 타입인지는 명시 필요
// 배열의 요소가 한 가지인 경우
var numArr = [1, 2, 3, 4, 5];
var strArr = ["가", "나", "다", "라"];
// 배열에 여러 개의 타입을 작성하고 싶을 때
// number or string 타입의 요소를 가진 배열
var arr1 = [1, 2, 3, "가", "나", "다"];
var arr2 = [1, 2, 3, "가", "나", "다"];
// boolean or null or number array를 요소로 가진 배열
var arr3 = [true, null, false, [4, 22]];
var arr4 = [true, null, false, [4, 22]];
// 어떤 자료형이든 상관 없이 들어갈 수 있는 배열
// 최대한 자제하여 사용할것 -> js랑 별 차이가 없기 때문!
var arrAny = [1, 2, 40, false, ["a", "b", 3], null];
