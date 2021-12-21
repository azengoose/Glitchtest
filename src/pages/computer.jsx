import * as React from "react";
import Contents from "../components/contents";
import Palette from "../components/palette";

export default function Computer() {
  return (
    <>
      <h1>C</h1>
      <p className="sub-text">Computer Stuff</p>

      <Palette />

      <div>
        <h2>Computer Stuff</h2>
        <p>
          A seeming chasm that exists between worlds such as that of the social
          sciences, humanities, arts and the natural sciences and technology.
        </p>
        <p>
          For [Developers], React basically was used to make this and some JS,
          classic web languages.
        </p>
        <p>
          For those who have had little to no interest in code, might I direct
          your attention to the NoCode movement, that encompasses tools such as
          Canva, but it is inevitable that the customisable complexity of
          writing code will be abstracted away into more beginner-friendly and
          accessible media and graphical or interactive interfaces. A problem
          with this is medium.
        </p>
      </div>

      <div>
        <Contents />
      </div>
    </>
  );
}
