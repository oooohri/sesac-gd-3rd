import { useRef } from "react";
export default function UseRef() {
  // 1. DOM요소에 접근할 때
  // input 요소의 경우
  const inputRef = useRef<HTMLInputElement>(null); // null 전달하기

  // 2. 리렌더링 되어도 유지되는 로컬 변수 필요할 때
  const localVar = useRef<string>("리렌더링 되도 유지됨");
  return (
    <>
      <h2>ts react에서 UseRef 타입 지정하기</h2>
      <input type="text" ref={inputRef} />
      {/* inputRef.current? 에서 ?는 InputRef.current가 없을 수 있기 때문에 작성 */}
      <button onClick={() => inputRef.current?.focus()}>
        input에 focus시키기{" "}
      </button>
      <div>localVal : {localVar.current}</div>
    </>
  );
}
