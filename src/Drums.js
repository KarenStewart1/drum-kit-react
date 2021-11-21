import React from "react";
import "./Drums.css";

export default function Drums() {
  let drumArray = [
    { sound: "CLAP", letter: "A" },
    { sound: "HIHAT", letter: "S" },
    { sound: "KICK", letter: "D" },
    { sound: "OPENHAT", letter: "F" },
    { sound: "BOOM", letter: "G" },
    { sound: "RIDE", letter: "H" },
    { sound: "SNARE", letter: "J" },
    { sound: "TOM", letter: "K" },
    { sound: "TINK", letter: "L" },
  ];

  function handleClick(event) {
    console.log(event.target);
    let clickedButton = event.target;
    clickedButton.classList.add("active-button");
    setTimeout(function () {
      clickedButton.classList.remove("active-button");
    }, 70);
  }

  return (
    <div className="Drums">
      {drumArray.map(function (drum, index) {
        return (
          <button className="button" onClick={handleClick} key={index}>
            {drum.letter}
            <div className="sound">{drum.sound}</div>
          </button>
        );
      })}
    </div>
  );
}
