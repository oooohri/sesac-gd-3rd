const InputForm = document.querySelector("#form");

//  등록 버튼 누르면 아이디 - 댓글 제출
InputForm.addEventListener("submit", (e) => {
  // 기존 동작 제거
  e.preventDefault();
  // 입력된 값 저장
  const inputId = document.querySelector("#user_id").value;
  const inputComment = document.querySelector("#comment").value;

  if (inputId !== "" || inputComment !== "") {
    // 새로 입력된 값을 li태그에 추가
    const newList = document.createElement("li");

    // 진한 스타일을 가진 span 태그 생성
    const idSpan = document.createElement("span");
    idSpan.style.fontWeight = "bold";
    idSpan.textContent = inputId;

    newList.append(idSpan);
    newList.append(document.createTextNode(" - "));
    newList.append(inputComment);

    // 생성한 li 태그를 목록(ul)에 추가
    InputList = document.querySelector(".list");
    InputList.append(newList);
    // 입력창 초기화
    inputId.value = "";
    inputComment.value = "";
  } else {
    alert("값을 입력해주세요.");
  }
});

// value 값을 저장해야 하는 이유 : const inputId = document.querySelector("#user_id"); 이 객체는 단순히 HTML 요소를 나타내는 것이며, 사용자가 입력한 실제 값은 이 객체의 value 속성에 저장되어 있음
// 제출된 정보를 아이디-댓글 순으로 밑에 li로 추가
