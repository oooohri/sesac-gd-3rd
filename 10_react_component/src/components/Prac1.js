// 실습
// 경로는 src -> components -> Prac1.js
export default function Prac1() {
  const helloStr = "Hello, this is first practice";
  const clickEvent = () => {
    alert("클릭했다!");
  };
  return (
    <div>
      <div style={{ marginTop: 32, backgroundColor: "pink" }}>실습입니다.</div>
      <div>{helloStr}</div>
      <button onClick={clickEvent}>버튼</button>
    </div>
  );
}
