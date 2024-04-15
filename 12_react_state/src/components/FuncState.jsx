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
import { useState } from "react";

export default function FuncState() {
  // const [state 변수명, state를 변경시키는 setter 함수] = useState(state의 초기값)
  // useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
  // 해당 state와 setter 함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
  // 여러개의 state 만들 수 있고 사용도 가능하다.
  const [apple, setApple] = useState("사과");
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>이 컴포넌트는 useState 사용</div>
      <button
        onClick={() => {
          setApple("apple");
        }}
      >
        영어로 변경
      </button>
      <div>{apple}</div>
      <hr />
      <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
      <div>{number}</div>
      <button
        onClick={() => {
          // setter 함수는 비동기라 중간에 씹힐 수 있어서 setter함수 자체에 콜백으로 함 (원래있던 값에 업데이트)
          //   setNumber((prevNum) => prevNum + 1);

          // number state를 1 더하는 로직 다음에 alert을 띄우는 로직이 작성되어 있어도
          // alert에 보이는 값은 1을 더하기 전 number값이 보임
          // state의 setter함수는 비동기적으로 동작함.
          // 그래서 number라는 state가 1 더한 값으로 업데이트 되기 전
          // alert창이 띄워져버려서 1 더한 값이 아닌 원래 값이 보이게 됨.
          setNumber(number + 1);
          alert(number);

          // 이를 해결하기 위한 하나의 예시
          // state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
          // 해당 콜백의 인자로는 원래 state값이고 원래 state 값에 1을 더하는 로직
          setNumber((prevNum) => {
            alert(prevNum + 1);
            return prevNum + 1;
          });
        }}
      >
        + 1
      </button>
    </>
  );
}

// ------------------------------------------------------------------------------
// useState 사용해 버튼 클릭 시 apple -> 사과 -> apple -> 사과
// import { useState } from "react";

// export default function FuncState() {
//   let [apple, setApple] = useState("사과");
//   //   const [showEnglish, setShowEnglish] = useState("사과");
//   return (
//     <div>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
//       <button
//         onClick={() => {
//           if (apple === "사과") {
//             setApple("apple");
//           } else if (apple !== "사과") {
//             setApple("사과");
//           }
//         }}
//       >
//         {apple === "사과" ? "영어로 변경" : "한글로 변경"}
//       </button>
//       <div>{apple}</div>
//       {/* <button onclick={() => {setShowEnglish(!showEnglish); }}>{showEnglish ? "한글" : "영어"}로 변경</button> */}
//       {/* <div>{showEnglish ? "apple" : "사과"}</div> */}
//     </div>
//   );
// }
