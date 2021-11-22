import React from "react";
import "./Drums.css";

export default function Drums() {
  let drumArray = [
    { sound: "./sounds/clap.wav", word: "clap", letter: "a" },
    { sound: "./sounds/Hihat.wav", word: "Hihat", letter: "s" },
    { sound: "./sounds/kick.wav", word: "kick", letter: "d" },
    { sound: "./sounds/openhat.wav", word: "openhat", letter: "f" },
    { sound: "./sounds/boom.wav", word: "boom", letter: "g" },
    { sound: "./sounds/ride.wav", word: "ride", letter: "h" },
    { sound: "./sounds/snare.wav", word: "snare", letter: "i" },
    { sound: "./sounds/tom.wav", word: "tom", letter: "j" },
    { sound: "./sounds/tink.wav", word: "tink", letter: "l" },
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
            <div className="sound">{drum.word}</div>
          </button>
        );
      })}
    </div>
  );
}
