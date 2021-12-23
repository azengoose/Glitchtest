import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const [Alternatives, setAlternatives] = useState(alternatives[0]);

  function randomAlternative() {
    return alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  const handleAlternative = () => {
    const newAlternative = randomAlternative();
    setAlternatives(newAlternative);
  };

  return (
    <motion.button
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1
      }}
      className="btn--cool"
      onClick={handleAlternative}
    >
      {Alternatives}
    </motion.button>
  );
}
