import FuncEvent from "./components/FunEvent";
import ClassEvent from "./components/ClassEvent";
import HandlerEx from "./components/ex/HandlerEx";
import EventPra from "./components/ex/EventPra";
import Prac from "./components/ex/Prac";
function App() {
  return (
    <div className="App">
      <FuncEvent />
      <ClassEvent />
      {/* 실습1 */}
      <HandlerEx />
      {/* 실습2 */}
      <EventPra />
      {/* 실습3 */}
      <Prac />
    </div>
  );
}

export default App;
