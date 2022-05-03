import "./styling/App.css";
import Drums from "./Drums";

function App() {
  return (
    <div className="App">
      <div className="instructions">
        Press the keys on your keyboard or use your mouse to click the buttons
        to get the corresponding sound of the drum.
        <div className="credits">
          Coded by{" "}
          <a
            href="https://karenstewart.nl"
            target="_blank"
            rel="noreferrer"
            title="My Portfolio"
          >
            Karen Stewart
          </a>
        </div>
      </div>
      <Drums />
    </div>
  );
}
