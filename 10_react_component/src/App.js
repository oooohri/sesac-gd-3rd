import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    // return문 안은 JSX문을 사용한다.
    <div className="App">
      {/* 컴포넌트 불러와 사용하는 방법 1 */}
      <ClassComponent />
      {/* 컴포넌트 불러와 사용하는 방법 2 */}
      <ClassComponent></ClassComponent>
      {/* 함수형 컴포넌트 */}
      <FunctionComponent></FunctionComponent>
    </div>
  );
}

export default App;
