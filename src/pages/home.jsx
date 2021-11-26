import * as React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <h1>&lt;MetaSite/&gt;</h1>
      <p className="sub-text">
        <strong>Why</strong> and <strong>How</strong> does this site exist &{" "}
        <br /> who the hell cares anyway?
      </p>
      <div className="instructions">
        <h2>Change and Variation</h2>
        <p>
          This is a <strong>React</strong> project. That just means that these
          web pages were created using something called React. This is a
          React-flavoured website, if you will. <Link href="/about">About</Link>{" "}
          page, and check out README.md in the editor for additional detail plus
          next steps you can take!
        </p>
        <h2>Change and Variation</h2>
        <p>
          This is a <strong>React</strong> project. That just means that these
          web pages were created using something called React. This is a
          React-flavoured website, if you will. <Link href="/about">About</Link>{" "}
          page, and check out README.md in the editor for additional detail plus
          next steps you can take!
        </p>
      </div>
    </>
  );
}
