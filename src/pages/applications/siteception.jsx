import * as React from "react";
import Contents from "/src/components/contents";

export default function Siteception() {
  return (
    <>
      <h1>SC</h1>
      <p className="sub-text">Siteception</p>
      <div>
        <h2>Siteception Stuff</h2>
        <p>
          A seeming chasm that exists between worlds such as that of the social
          sciences, humanities, arts and the natural sciences and technology.
        </p>
        <p>
          For [Developers], React basically was used to make this and some JS,
          classic web languages.
        </p>
      </div>
      This live preview for{" "}
      <a class="ihover" href="https://en.wikipedia.org/">
        Wikipedia
      </a>
      <div class="box">
        <iframe
          src="https://en.wikipedia.org/"
          width="500px"
          height="500px"
        ></iframe>
      </div>
      remains open on mouseover.
      <div>
        <Contents />
      </div>
    </>
  );
}
