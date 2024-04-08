import ClassState from "./components/ClassState";
import FuncState from "./components/FuncState";
import Classprac from "./components/Classprac";
import Funprac from "./components/Funprac";
import CharactorContainer from "./components/CharactorContainer";
function App() {
  return (
    <div className="App">
      <ClassState />
      <FuncState></FuncState>
      {/* 실습1 -클래스형*/}
      <Classprac />
      {/* 실습2 - 함수형 */}
      <Funprac />
      {/* 실습3 - 뽀로로*/}
      <CharactorContainer></CharactorContainer>
    </div>
  );
}

export default App;
