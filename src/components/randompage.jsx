import React, { useState } from "react";
import { useLocation } from "wouter";

export default function RandomPage() {
  const allpages = ["/about", "/c", "/sc", "/i", "/s"];

  const [randpage, setRandpage] = useState();

  function randomSelect() {
    return allpages[Math.floor(Math.random() * allpages.length)];
  }

  const [location, setLocation] = useLocation();

  function handleRandom() {
    const chosenpage = randomSelect();
    setRandpage(chosenpage);

    setLocation(chosenpage);
  }

  return (
    <>
      <button className="btn--cool" onClick={handleRandom}>
        Random Page
      </button>
      <h2>Would you like to navigate to: {randpage} ? </h2>
    </>
  );
}
