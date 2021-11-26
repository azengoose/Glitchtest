import * as React from "react";

function Title() {
  return <p>Hello</p>;
}

export default function About() {
  const title = Title();
  const text = "hello there";

  return (
    <>
      <h2>About</h2>
      <p>{text}hi</p>
    </>
  );
}
