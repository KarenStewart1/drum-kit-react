import "./App.css";
import Drums from "./Drums";
import Sound from "./Sound";

function App() {
  return (
    <div className="App">
      <div className="row drums">
        <Drums />
        <Sound />
      </div>
    </div>
  );
}

export default App;
