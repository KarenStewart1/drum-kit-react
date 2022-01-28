import React from "react";
import "./Drums.css";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";

export default function Drums() {
  const drumArray = [
    { sound: clap, word: "clap", letter: "a" },
    { sound: hihat, word: "hihat", letter: "s" },
    { sound: kick, word: "kick", letter: "d" },
    { sound: openhat, word: "openhat", letter: "f" },
    { sound: boom, word: "boom", letter: "g" },
    { sound: ride, word: "ride", letter: "h" },
    { sound: snare, word: "snare", letter: "j" },
    { sound: tom, word: "tom", letter: "k" },
    { sound: tink, word: "tink", letter: "l" },
  ];

  function playSound(letter) {
    let audioFile = new Audio(
      drumArray.filter((each) => each.letter === letter)[0].sound
    );
    audioFile.play();
  }

  function changeButtonStyling(button) {
    button.className = "button active-button";
    setTimeout(function () {
      button.className = "button";
    }, 70);
  }

  function handleKeyPress(event) {
    let keyPressed = event.key;
    playSound(keyPressed);

  }

  window.addEventListener("keydown", handleKeyPress);

  function handleClick(event) {
    event.preventDefault();
    let clickedLetter = event.target.innerText.toLowerCase();
    playSound(clickedLetter);
    changeButtonStyling(event.target);
  }
  return (
    <div className="Drums">
      <div className="row">
        {drumArray.map(function (drum, index) {
          return (
            <button className="button" onClick={handleClick} key={index}>
              {drum.letter}
              <div className="sound">{drum.word}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
