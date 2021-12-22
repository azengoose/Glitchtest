import React, { useState } from "react";

export default function ButtonChange() {
  const alternatives = [
    "Why don't you click this button?",
    "Woow, you just clicked on a button!",
    "My, my, can you follow directions!",
    "This is föcking INTERACTIVE???!!!",
    "This button only sometimes works.",
    "Stop this at once.",
    "You're a button-clicker. Congrats"
  ];
  function randomAlternative() {
    return alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  const [Alternatives, setAlternatives] = useState(alternatives[0]);
  const handleAlternative = () => {
    const newAlternative = randomAlternative();
    setAlternatives(newAlternative);
  };

  return (
    <button className="btn--cool" onClick={handleAlternative}>
      {Alternatives}
    </button>
  );
}
