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
  return (
    <div className="Drums">
      {drumArray.map(function (drum, index) {
        return (
          <button className="button" key={index}>
            {drum.letter}
            <div className="sound">{drum.sound}</div>
          </button>
        );
      })}
    </div>
  );
}
