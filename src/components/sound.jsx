import React from "react";

export default function Sound() {
  function playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }
  return (
    <div>
      <button className="btn--cool" onClick={playAudio}>
        <span>Play Audio</span>
      </button>
      <audio className="audio-element">
        <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
      </audio>
    </div>
  );
}
