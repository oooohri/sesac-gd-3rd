import ClassLifeCycle from "./components/ClassLifeCycle";
import FunLifeCycle from "./components/FuncLifeCycle";
import PracContainer from "./components/PracContainer";
import PracFakePost from "./components/PracFakePost";

function App() {
  return (
    <div className="App">
      {/* <ClassLifeCycle /> */}
      <FunLifeCycle />
      {/* <PracContainer>
        <PracFakePost />
      </PracContainer> */}
    </div>
  );
}

export default App;
