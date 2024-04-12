import ClassState from "./components/ClassState";
import FuncState from "./components/FuncState";
import Classprac from "./components/Classprac";
import Funprac from "./components/Funprac";
import CharactorContainer from "./components/CharactorContainer";
import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [show, setShow] = useState(false);
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
      <button onClick={() => setShow(true)}>모달 보이기</button>

      {show && <Modal msg="확인하시겠습니까?" setShow={setShow} />}

      {show && (
        <Modal msg="확인하시겠습니까?22" isInput={true} setShow={setShow} />
      )}

      {show && (
        <Modal
          msg="확인하시겠습니까?333"
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
