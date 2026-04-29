import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submittedPlayerName, setSubmittedPlayerName] = useState(false);
  // function handleChange(e) {
  //   setSubmittedPlayerName(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick() {
    // setSubmittedPlayerName(true);
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        {/* Welcome {submittedPlayerName ? enteredPlayerName : "unknown entity"} */}
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // value={enteredPlayerName}
          // onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
