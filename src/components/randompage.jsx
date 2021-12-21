import React, { useState } from "react";
import { Link } from "wouter";

export default function RandomPage() {
  const allpages = [
    "Computer Stuff",
    "About the Site",
    "On Failure",
    "The Internet",
    "Social Worlds",
    "Siteception",
    "You're a button-clicker. Congrats"
  ];

  function randomSelect() {
    return allpages[Math.floor(Math.random() * allpages.length)];
  }

  const [randpage, setRandpage] = useState();
  function handleRandom() {
    const chosenpage = randomSelect();
    setRandpage(chosenpage);
  }

  return (
    <>
      <button onClick={handleRandom}>Random Page</button>
      <h2>Would you like to navigate to: {randpage} ?</h2>

      {/* <Link href="/c">Computer Stuff</Link> - {""}
      <Link href="/f"> Discomfort and Failure</Link> - {""}
      <Link href="/i">The Internet</Link> - {""}
      <Link href="/s">Social Worlds</Link> - {""}
      Learning and Projects - Existence */}
    </>
  );
}
