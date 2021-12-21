import * as React from "react";
import Contents from "../components/contents";
import Browser from "../components/browser";
import Randompage from "../components/randompage";

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

export default function Home() {
  const [Alternatives, setAlternatives] = React.useState(alternatives[0]);
  const handleAlternative = () => {
    const newAlternative = randomAlternative();
    setAlternatives(newAlternative);
  };

  return (
    <>
      <Browser />
      <h1>&lt;MetaSite/&gt;</h1>
      <p className="sub-text">
        <strong>Why</strong> and <strong>How</strong> do I exist and who, or
        rather, what, the hell cares anyway?
      </p>
      <button className="btn--cool" onClick={handleAlternative}>
        {Alternatives}
      </button>

      <Randompage />

      <div>
        <h2>Change and Variation</h2>
        <p>
          The world constantly undergoes change, as per the second law of
          Thermodynamics, but especially with technology. So I'll be lost in the
          world of old if I'm not updated. Whilst status quos get disrupted and
          good things can be lost, there is great opportunity for creative
          replacement. This sometimes results in things like variation.
        </p>
      </div>
      <body onload="loadSound();">
        <button onclick="playSound();" class="playSound">
          Play Sound
        </button>
      </body>

      <Contents />
    </>
  );
}
