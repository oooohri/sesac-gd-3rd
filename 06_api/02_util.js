// 유틸화 - 함수 분리해서 필요할 때마다 사용

// todo 함수 내보내는 방법
// 1. 함수 앞에 export 키워드 작성

// export function consoleName(name) {
//   console.log(`당신의 이름은 ${name}`);
// }

// export function consoleName2(name) {
//   console.log(`당신의 이름은 ${name} 222`);
// }

// ? default 키워드 작성 시 해당 함수가 이 파일의 대표 함수가 된다.
// export default function consoleNameMain(name) {
//   console.log(`당신의 이름은 ${name} main 함수`);
// }

// ? 한번에 모아서 export 작성 가능
export { consoleName, consoleName2 };

// 2. 마지막에 모아서 export문 작성
function consoleName(name) {
  console.log(`당신의 이름은 ${name}`);
}

function consoleName2(name) {
  console.log(`당신의 이름은 ${name} 222`);
}

