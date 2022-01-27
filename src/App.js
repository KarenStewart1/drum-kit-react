import "./App.css";
import Drums from "./Drums";
// import Sound from "./Sound";

function App() {
  return (
    <div className="App">
      <div className="instructions">
        Press the keys on your keyboard or use your mouse to click the buttons
        to get the corresponding sound of the drum.
        <div className="credits">
          Coded by{" "}
          <a
            href="https://admiring-goldstine-ca62c9.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            Karen Stewart
          </a>
        </div>
      </div>
      <Drums />
    </div>
  );
}

export default App;
