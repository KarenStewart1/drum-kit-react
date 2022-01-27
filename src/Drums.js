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
  const drumArray = {
    a: { sound: clap, word: "clap", letter: "a" },
    s: { sound: hihat, word: "hihat", letter: "s" },
    d: { sound: kick, word: "kick", letter: "d" },
    f: { sound: openhat, word: "openhat", letter: "f" },
    g: { sound: boom, word: "boom", letter: "g" },
    h: { sound: ride, word: "ride", letter: "h" },
    j: { sound: snare, word: "snare", letter: "j" },
    k: { sound: tom, word: "tom", letter: "k" },
    l: { sound: tink, word: "tink", letter: "l" },
  };

  function playSound(letter) {
    let audioFile = new Audio(drumArray[letter].sound);
    audioFile.play();
  }

    setTimeout(function () {
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
