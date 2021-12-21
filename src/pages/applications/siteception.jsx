import * as React from "react";
import { useState } from "react";
import Contents from "/src/components/contents";

export default function Siteception() {
  const [frame, setFrame] = useState("framebox-closed");

  function handleToggle() {
    setFrame("framebox-open");
    if (frame === "framebox-open") {
      setFrame("framebox-closed");
    }
  }

  return (
    <>
      <h1>SC</h1>
      <p className="sub-text">Siteception</p>
      <p>
        Open a live preview of this site within this site with{" "}
        <a href="#" onClick={handleToggle}>
          Siteception initiate.
        </a>
      </p>
      <div className={frame}>
        <iframe
          title="siteception"
          src="https://codesandbox.io/s/snowy-dawn-186sy?file=/src/pages/applications/siteception.jsx"
          width="700px"
          height="500px"
        ></iframe>
      </div>
      <div>
        <h2>Siteception Stuff</h2>
        <p>
          A seeming chasm that exists between worlds such as that of the social
          sciences, humanities, arts and the natural sciences and technology.
        </p>
        <p>
          Siteception can only really be tested for usability and any other
          technical and styling issues and improvements once the site is
          actually live on a domain...or this sandbox can just be used I guess
          for now.
        </p>
      </div>
      This live preview remains open on mouseover. For
      <a class="ihover" href="https://en.wikipedia.org/">
        Wikipedia.
      </a>
      <div class="ihoverbox">
        <iframe
          title="wikipedia"
          src="https://en.wikipedia.org/"
          width="100%"
          height="500px"
        ></iframe>
      </div>
      <div>
        <Contents />
      </div>
    </>
  );
}
