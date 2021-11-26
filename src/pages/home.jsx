import * as React from "react";
import { Link } from "wouter";

const alternatives = [
  "Why don't you click this button?",
  "Wow, you just clicked on a link!",
  "My, my, can you follow directions!",
  "This is föcking INTERACTIVE???!!!"
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
      <h1>&lt;MetaSite/&gt;</h1>
      <p className="sub-text">
        <strong>Why</strong> and <strong>How</strong> do I exist & who or rather{" "}
        what the hell cares anyway?
      </p>
      <button className="btn--cool" onClick={handleAlternative}>
        {Alternatives}
      </button>
      <div className="instructions">
        <h2>Change and Variation</h2>
        <p>
          This is a <strong>React</strong> project. That just means that these
          web pages were created using something called React. This is a
          React-flavoured website, if you will. <Link href="/about">About</Link>{" "}
          page, and check out README.md in the editor for additional detail plus
          next steps you can take!
        </p>
        <h2>Contents</h2>
        <p>
          - Computer Stuff - Learning - Projects - Fulfilment - Discomfort &
          Failure - Existence - Social Worlds
        </p>
      </div>
    </>
  );
}
