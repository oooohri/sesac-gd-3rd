// addeventListener 사용 전에, HTML 문서에서 특정 클래스를 가진 요소들을 선택하고 변수에 담아놓는다.
const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-pink");
const btn3 = document.querySelector(".btn-gold");
const btn4 = document.querySelector(".btn-skyblue");
const container = document.querySelector(".container");

// * addEventListener 사용
// ! 하나의 요소에 여러 이벤트 등록 가능

// btn1 : 익명 함수, 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭했습니다.");
});

// mouseover : 마우스가 해당 요소 위에 올라갔을 때 실행 -> 마우스 떼도 계속 적용
// hover (css) : 마우스가 해당 요소 위에 올라가 있을 때만 적용 -> 마우스 떼면 원래대로 돌아감
btn1.addEventListener("mouseover", function () {
  // 선택된 요소 자신을 수정하고 싶은 경우 this 키워드 사용
  this.style.backgroundColor = "red";
});

// btn2 : 화살표 함수 사용해 container에 요소 추가
// 즉 btn2를 클릭하면 container에 div태그가 추가된다.
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "yellowgreen";
  div.style.marginBottom = "10px";
  div.innerText = "버튼 2를 클릭해 추가된 div";
  container.append(div);
});

// btn3 : 함수 선언해서 이벤트 등록
btn3.addEventListener("click", changeColor); // 함수 호출
// 같은 기능을 재사용 하는 경우에 이렇게 함수를 선언하고, addEventListener에서 불러와 사용
// ! addEventListener에 함수를 불러올 때 괄호 작성 X (예를들어 changeColor()와 같이 작성X)
// 괄호 작성 시 Js를 파싱하면서 해당 코드와 만나면 바로 해당 함수를 실행시켜버림
function changeColor() {
  let divs = document.querySelectorAll(".container div");

  // 만약 div요소가 없다면 alert창 띄우는 예외처리
  if (divs.length !== 0) {
    for (let div of divs) {
      div.style.color = "red";
    }

    // 마지막 요소만 배경색 파란 색으로 변경
    divs[divs.length - 1].style.backgroundColor = "blue";
  } else {
    alert("버튼 2를 클릭해 div를 추가해주세요.");
  }
}
// btn4 : 이벤트 적용된 자기 자신을 선택하는 this 키워드 사용
btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.style.backgroundColor = "orange";
  this.style.color = "skyblue";
}

// click 이외에도 다양한 이벤트들 있음

// 매개변수 event
// scroll 이벤트는 브라우저 전체에 대해 실행되는 동작이기 때문에 어떤 요소가 아닌 window에 걸어줌
// console.log(window);

window.addEventListener("scroll", (event) => {
  //  이벤트가 무엇인지 확인
  console.log(event); // event 객체 출력됨.
  // event.target은 이벤트가 발생한 요소를 나타냄.
  // 즉, 여기서는 스크롤 이벤트가 발생한 document 자체를 의미
  console.log(event.target);

  console.log(scrollY);
  // 스크롤 크기가 300보다 커지면 배경색 바뀜
  if (scrollY > 300) {
    document.body.style.backgroundColor = "lightgray";
  }
});

// * form 이벤트 - todo 리스트
// form, ul태그 변수 만들어 담아놓음.
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

// 폼이 제출되는 이벤트
todoForm.addEventListener("submit", (e) => {
  // 브라우저 상에서 기본적으로 동작하는 이벤트 동작을 제거 (자동새로고침 제거)
  e.preventDefault();
  console.log("submit");

  // 입력창 변수 만들고 담음
  const todoInput = document.querySelector("input[name=todo]"); // 입력창
  console.log(todoInput); // <input type="text" name="todo">
  console.log(todoInput.value); // input 요소의 value를 가져옴

  // input 요소 자체의 value 수정 가능
  //   todoInput.value = "짜잔!";

  // intput의 value를 ul태그 html 문서 담아놓은 변수에 저장
  const todo = todoInput.value;

  // 값 화면에 표현하기
  // 만약 빈 문자열이 들어왔을 때 li로 추가하고 싶지 않다면
  if (todo !== "") {
    // 새로 입력한 값을 li태그에 추가
    const newTodo = document.createElement("li");
    //   newTodo.innerText = todo;
    // 입력창에 입력한 값을 담아놓은 todo변수를 li태그 변수에다가 추가
    newTodo.append(todo);
    // li태그를 ul태그 안에 다시 담음.(변경)
    todos.append(newTodo);

    // 입력창 초기화
    // 입력 후 입력창 초기화 되도록 한다.
    todoInput.value = "";
  } else {
    alert("값을 입력하세요!");
  }
});
/*
   순서 정리하자면 다음과 같다.
    
    1. form, ul기존 태그의 변수 만들고
    2. 제출 메소드 (
        1) 새로고침 제거
        2) 사용자 입력창 변수 값 만들고 새로운 변수에 담음
        3) 입력값을 화면에 뿌리기
            - li태그 만들고 변수에 담음
            - 새 값(변수)을 li태그 변수에 담음
            - li태그 변수를 ul태그 변수에 담음 (새로운 값이 결국 ul태그에도 반영돼 변경)
        4) 초기화

)

 */

// * 변경 이벤트
const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("input", (e) => {
  console.log("changed!");

  const div = document.querySelector(".change-input-value");
  // e : 이벤트 객체
  // target : 해당 이벤트가 발생한 요소 자체
  // value : input의 value값
  div.innerHTML = e.target.value;
  // 즉, e.target.value는 input창에 입력된 값이고 이 입력된 값을 div에 html로 넣을것이다.
  // 입력된 값이 div태그의 값으로 나타나게 되고 화면에도 그 값이 나타남.
});
