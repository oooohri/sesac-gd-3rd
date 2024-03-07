// 계산하기 클릭 시, 결과 input창에 출력
const calculator = document.getElementById("calc");

calculator.addEventListener("click", (e) => {
  e.preventDefault();

  // 1. 입력받은 값 확인
  value1 = parseInt(document.getElementById("value1").value);
  value2 = parseInt(document.getElementById("value2").value);
  operator = document.getElementById("operator").value;
  let result;

  // 예외처리
  if (isNaN(value1) || isNaN(value2)) {
    alert("올바른 값을 입력해 주세요.");
  }

  // 2. 입력받은 값 계산
  if (operator == "+") {
    result = value1 + value2;
  } else if (operator == "-") {
    result = value1 - value2;
  } else if (operator == "*") {
    result = value1 * value2;
  } else if (operator == "/") {
    result = value1 / value2;
  } else {
    alert("연산자를 바르게 입력하세요.");
  }
  // 3. 결과값을 결과창에 출력
  console.log(result);
  document.getElementById("result").value = result;

  // 4. 초기화
  // 초기화 버튼 누르면 값 다시 없어짐
  reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").value = "";
  });
});
