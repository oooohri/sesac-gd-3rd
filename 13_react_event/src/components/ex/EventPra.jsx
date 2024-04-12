import React from "react";
import { useState } from "react";

export default function EventPra() {
  const [textColor, setTextColor] = useState({
    color: "black",
    text: "검정색 글씨",
  });

  return (
    <>
      <h2 style={{ color: textColor.color }}>{textColor.text}</h2>
      {/* () => {} 익명함수로 전달해야함! 왜냐하면 메소드()형식이기 때문에 함수 자체가 아니라,
          함수 호출하여 실행되기 때문에 무한루프가 걸림
      */}
      <button
        onClick={() => setTextColor({ color: "red", text: "빨간색 글씨" })}
      >
        빨간색
      </button>
      <button
        onClick={() => setTextColor({ color: "blue", text: "파란색 글씨" })}
      >
        파란색
      </button>
    </>
  );
}
