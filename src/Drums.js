import React from "react";
import "./styling/Drums.css";
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
    { soundFile: clap, word: "clap", letter: "a" },
    { soundFile: hihat, word: "hihat", letter: "s" },
    { soundFile: kick, word: "kick", letter: "d" },
    { soundFile: openhat, word: "openhat", letter: "f" },
    { soundFile: boom, word: "boom", letter: "g" },
    { soundFile: ride, word: "ride", letter: "h" },
    { soundFile: snare, word: "snare", letter: "j" },
    { soundFile: tom, word: "tom", letter: "k" },
    { soundFile: tink, word: "tink", letter: "l" },
  ];

  function playSound(letter) {
    let audioFile = new Audio(
      drumArray.filter((each) => each.letter === letter)[0].soundFile
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
    playSound(event.key);
    let correspondingButton = document.getElementById(`${event.key}`);
    changeButtonStyling(correspondingButton);
  }

  function handleClick(event) {
    event.preventDefault();
    playSound(event.currentTarget.id);
    changeButtonStyling(event.currentTarget);
  }
  window.addEventListener("keydown", handleKeyPress);

  return (
    <div className="Drums">
      <div className="row">
        {drumArray.map((object, index) => (
          <button
            className="button"
            id={object.letter}
            key={index}
            onClick={handleClick}
          >
            {object.letter.toUpperCase()}
            <div className="sound-word">{object.word}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
