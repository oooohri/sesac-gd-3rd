// * vanilla Js로 작성
// import { useState } from "react";
/* 

export default function FuncState() {
  let apple = "사과";

  const inEng = () => {
    // .state 요소를 찾아 해당 요소의 content를 apple로 바꾸기
    const content = document.querySelector(".state");
    content.innerText = "apple";
    apple = "apple";

    console.log(apple);
  };
  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>이 컴포넌트는 vanilla Js로 작성</div>
     
      <button onClick={() => inEng()}>영어로 바꾸기</button>
      <div className="state">{apple}</div>
    </>
  );
}
*/
// ------------------------------------------------------------------------------

// * useState 사용
// import { useState } from "react";

// export default function FuncState() {
//   // const [state 변수명, state를 변경시키는 setter 함수] = useState(state의 초기값)
//   // useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
//   // 해당 state와 setter 함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
//   // 여러개의 state 만들 수 있고 사용도 가능하다.
//   const [apple, setApple] = useState("사과");
//   const [number, setNumber] = useState(0);
//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 useState 사용</div>
//       <button
//         onClick={() => {
//           setApple("apple");
//         }}
//       >
//         영어로 변경
//       </button>
//       <div>{apple}</div>
//       <hr />

//       <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           // setNumber()는 비동기적으로 동작하므로 alert함수가 호출될 때 number의 값은 아직 호출되지 않은 상태여서
//           // 업데이트 전의 값이 나타나게 된다.
//           // setNumber(number + 1);
//           // alert(number);

//           // 이를 해결하기 위한 하나의 예시
//           // state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
//           // 해당 콜백의 인자로는 원래 state값이고 원래 state 값에 1을 더하는 로직
//           setNumber((prevNum) => {
//             // 1. prevNum+1이 먼저 실행되어 alert창에 표시됨
//             alert(prevNum + 1);
//             // 2. 최종적으로 업데이트 됨
//             return prevNum + 1;
//           });
//         }}
//       >
//         + 1
//       </button>
//     </>
//   );
// }

// ------------------------------------------------------------------------------
// useState 사용해 버튼 클릭 시 apple -> 사과 -> apple -> 사과
import { useState } from "react";

export default function FuncState() {
  let [apple, setApple] = useState("사과");
  const [showEnglish, setShowEnglish] = useState("사과");
  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
      {/* <button
        onClick={() => {
          if (apple === "사과") {
            setApple("apple");
          } else if (apple !== "사과") {
            setApple("사과");
          }
        }}
      >
        {apple === "사과" ? "영어로 변경" : "한글로 변경"}
      </button> */}
      {/* <div>{apple}</div> */}
      <button
        onClick={() => {
          setShowEnglish(!showEnglish);
        }}
      >
        {showEnglish ? "한글" : "영어"}로 변경
      </button>

      <div>{showEnglish ? "apple" : "사과"}</div>
    </>
  );
}
