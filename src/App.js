import "./App.scss";
import React from "react";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";
// import "./components/Player.scss";

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Player />
    </div>
  );
}

export default App;
