import { useState } from "react";

export default function Funprac() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  return (
    <>
      <h2>실습 2 - 함수형</h2>
      {/* increase() < 괄호 쓰지 않기! -> 함수가 렌더링 시에 바로 실행되므로, 이벤트 핸들러 의미가 없어짐 */}
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>

      <h1>
        <div>
          {number}
          {number >= 8 ? "😍" : "😈"}
        </div>
      </h1>
    </>
  );
}
