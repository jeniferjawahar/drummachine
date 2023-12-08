import { useEffect } from "react";
import "./App.css";

export default function Keypad({
  audioObj,
  mode,
  volume,
  power,
  mname,
  onNameChange,
}) {
  useEffect(() => {
    console.log("use effect");
    const onKeyPress = (event) => {
      console.log("audio play");
      console.log(event.key.toUpperCase());
      audioPlay(event.key.toUpperCase());
    };
    // document.removeEventListener("keydown", onKeyPress);
    // document.addEventListener("keydown", onKeyPress);

    window.addEventListener("keydown", onKeyPress);

    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  // useKeyPress(["Q", "W"], audioPlay);

  function audioPlay(audioID) {
    const audio = document.getElementById(audioID);
    if (power) {
      if (audio) {
        audio.play();
        audio.volume = volume;
        console.log("mode" + mode);
        const audioElement = audioObj.find((el) => el.id === audioID);
        console.log("mode" + mode);
        onNameChange(mode ? audioElement.name1 : audioElement.name2);
      }
    }
  }

  return (
    <div className="keysdisplay" id="display">
      {audioObj.map((el) => (
        <button
          key={el.id}
          id={el.name1}
          className="drum-pad"
          onClick={() => audioPlay(el.key)}
        >
          {el.key}

          <audio
            src={mode ? el.audio1 : el.audio2}
            id={el.key}
            className="clip"
          ></audio>
        </button>
      ))}
      <div>
        <p>MODE:{mode}</p>
        <p className="para"> {power ? mname : " "}</p>
        <p> {power ? "power on" : "power off"}</p>
        <p> {mode ? "mode on" : "mode off"}</p>
      </div>
    </div>
  );
}
