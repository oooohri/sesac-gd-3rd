import CustomHook from "./components/Customhook";
import UseCallback1 from "./components/UseCallback1";
import UseCallback2 from "./components/UseCallback2";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <UseCallback1 />
      <UseCallback2 />
      <UseReducer />
      <CustomHook />
    </div>
  );
}

export default App;
