import React from "react";
import { useState } from "react";

export default function Prac() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <br />
      <button onClick={() => setDisplay(!display)}>
        {display ? "사라져라" : "보여라"}
      </button>
      {display && <h2>안녕하세요!</h2>}
    </>
  );
}
