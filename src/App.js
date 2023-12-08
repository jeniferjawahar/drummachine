import { useState } from "react";
import "./App.css";
import Features from "./Features";
import Keypad from "./Keypad";
import "./Keypad.css";

let audioObj = [
  {
    audio1: "/A1_1.mp3",
    audio2: "/A1_2.mp3",
    name1: "glassClick",
    name2: "KeypadClick",
    key: "Q",
    id: "Q",
  },
  {
    audio1: "/A2_1.mp3",
    audio2: "/A2_2.mp3",
    name1: "Flight",
    name2: "FlightFast",
    key: "W",
    id: "W",
  },
  {
    audio1: "/A3_1.mp3",
    audio2: "/A3_2.mp3",
    name1: "AirFlight",
    name2: "AirFlightFast",
    key: "E",
    id: "E",
  },
  {
    audio1: "/A4_1.mp3",
    audio2: "/A4_2.mp3",
    name1: "WhooshArrow",
    name2: "Arrow",
    key: "A",
    id: "A",
  },
  {
    audio1: "/A5_1.mp3",
    audio2: "/A5_2.mp3",
    name1: "HardCoinSplit",
    name2: "ArrowFast",
    key: "S",
    id: "S",
  },
  {
    audio1: "/A6_1.mp3",
    audio2: "/A6_2.mp3",
    name1: "AirDrumSlow",
    name2: "AirDrumFast",
    key: "D",
    id: "D",
  },
  {
    audio1: "/A7_1.mp3",
    audio2: "/A7_2.mp3",
    name1: "DrumHard",
    name2: "DrumSoft",
    key: "Z",
    id: "Z",
  },
  {
    audio1: "/A8_1.mp3",
    audio2: "/A8_2.mp3",
    name1: "MusicHard",
    name2: "MusicSoft",
    key: "X",
    id: "X",
  },
  {
    audio1: "/A9_1.mp3",
    audio2: "/A9_2.mp3",
    name1: "Drum1",
    name2: "Drum2",
    key: "C",
    id: "C",
  },
];

function App() {
  const [volume, setVolume] = useState(0.1);
  const [mode, setMode] = useState(true);
  const [power, setPower] = useState(true);
  const [mname, setMname] = useState("");

  let audio = "";
  // function detectKey(e) {
  //   let reqKey = audioObj.find((el) => el.key === e.key);
  //   if (reqKey) {
  //     console.log(mode + " mode from app");
  //     let result = mode ? reqKey.audio1 : reqKey.audio2;
  //     audio = new Audio(result);
  //     audio.play();
  //   }
  // }

  function handleVolumeChange(e) {
    if (power) setVolume(e.target.value);
  }

  function handleModeChange() {
    if (power) setMode((m) => !m);
  }

  function handlePowerChange() {
    setPower((m) => !m);
    console.log(power);
  }

  function handleNameChange(audioName) {
    if (power) setMname(audioName);
  }

  return (
    <div id="drum-machine" className="wrapper">
      <Keypad
        audioObj={audioObj}
        mode={mode}
        volume={volume}
        power={power}
        mname={mname}
        onNameChange={handleNameChange}
      />
      <Features
        volume={volume}
        power={power}
        mode={mode}
        onVolumeChange={handleVolumeChange}
        onModeChange={handleModeChange}
        onPowerChange={handlePowerChange}
      />
      <p>{power ? "power on" : "power off"}</p>
    </div>
  );
}

export default App;
