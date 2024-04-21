import { useRef, useState } from "react";

export default function FuncRef() {
  // react에서 DOM요소 조작
  // react에서는 DOM요소에 직접적으로 접근해 조작하지 않는 것이 좋음
  // virtual DOM을 사용하기 때문에 직접적인 DOM조작은 react에서 지양해달라고 함
  // 이렇게 선언하면 input.current를 통해 실제 DOM요소에 접근 가능하다.
  // 초기값은 undefined이다.
  const input = useRef();

  // 인풋창에 focus 하는 함수
  const focusInput = () => {
    console.log(input);
    console.log(input.current);
    // 리액트에서 DOM요소에 직접적으로 접근함.
    input.current.focus();
  };

  // ref를 변수로 사용
  // -> current 사용하기 위함
  const localVar = useRef(0);
  // state
  const [state, setStateVar] = useState(0);
  // 일반 변수
  let justVar = 0;

  // localVar (ref 사용) 증가하는 함수
  const inCreLocalVar = () => {
    localVar.current++;
    console.log("localVar.current: " + localVar.current);
  };

  // JustVar(일반 변수 사용) 증가하는 함수
  const inCreJustVar = () => {
    justVar++;
    console.log("justVar: " + justVar);
  };

  return (
    <>
      {/* useRef를 사용해 만든 ref는 DOM요소와 연결해 사용 */}
      {/* ref 속성으로 만든 ref를 전달 */}
      <input type="text" ref={input} />
      {/* 버튼을 누르면 input창에 포커싱된다. */}
      <button onClick={focusInput}>버튼</button>

      <h2>localVar.current : {localVar.current}</h2>
      <h2>state : {state}</h2>
      <h2>justVar : {justVar}</h2>
      <button onClick={inCreLocalVar}>local + 1</button>
      <button onClick={() => setStateVar(state + 1)}>state + 1</button>
      <button onClick={inCreJustVar}>justVar + 1</button>
    </>
  );
}
