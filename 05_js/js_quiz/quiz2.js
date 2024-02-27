function isDone(num) {
  // 조건을 만족하는 isDone 함수를 작성해주세요.
  if (num <= 16) {
    return true;
  } else {
    return false;
  }
}

//  해당 html 파일을 실행한 브라우저 콘솔창에서 isDone 함수를 호출해주세요!

console.log(`isDone(9) = ${isDone(9)}`);
console.log(`isDone(14) = ${isDone(14)}`);
console.log(`isDone(16) = ${isDone(16)}`);
console.log(`isDone(20) = ${isDone(20)}`);
