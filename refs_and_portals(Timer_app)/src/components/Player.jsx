import { useState } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submittedPlayerName, setSubmittedPlayerName] = useState(false);
  function handleChange(e) {
    setSubmittedPlayerName(false);
    setEnteredPlayerName(e.target.value);
  }

  function handleClick() {
    setSubmittedPlayerName(true);
  }

  return (
    <section id="player">
      <h2>
        Welcome {submittedPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
