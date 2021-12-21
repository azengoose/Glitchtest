import React, { useState, useEffect } from "react";
import "../styles/palettestyles.css";

export default function Palette() {
  const [palette, setPalette] = useState(
    "light-theme",
    localStorage.getItem("theme") === "true"
  );

  //the useEffect hook to compare previous and current state
  useEffect(() => {
    localStorage.setItem("theme", palette);
  }, [palette]);

  function toggleTheme() {
    setPalette("dark-theme");
    if (palette === "dark-theme") {
      setPalette("light-theme");
    }
  }

  return (
    <>
      <div className={palette}>
        <h2>This is a palette swap</h2>
        <button type="button" onClick={toggleTheme}>
          <span role="img" aria-label="moon">
            🌛
          </span>
          Switch to dark mode
        </button>
      </div>
    </>
  );
}
