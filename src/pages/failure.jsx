import * as React from "react";
import Contents from "../components/contents";

export default function Failure() {
  const text = "Failure is life.";

  return (
    <>
      <h1>F</h1>
      <p className="sub-text">
        F is for ... fun, failure, flatulence, flagellation, forgiveness, and
        fully fucked.
      </p>
      <div>
        <h2>Discomfort and Failure</h2>
        <p>
          People tend to feel uncomfortable talking about such a topic. But
          failure is ingrained in me.
        </p>
        <p>
          For one, failure, hiccups, valley in the alleys, greatly contribute to
          growth; they're usually the most impactful moments – the kind that
          people remember on their deathbeds. My very existence can also in part
          be attributed to the failures and mishaps of past websites. I am
          embedded within the scars of failure. In fact, I am a mistake; a
          mistake of birth, and a mistake of persistence (for now), yet not only
          as the means to something perhaps more beautiful or thought-provoking,
          but also as an end in itself – I fail and I fail to exist.
        </p>
        <p>
          Inherently, to fail is uncomfortable. For most people. And although I
          have to simplify, for most comfortable people on modest living
          standards, it is oft the case that it is good, to deliberately seek
          discomfort.
        </p>
        <p>
          Failure is also inevitable. It's a feature of existence. Get used to
          it, buddy. And also fail to get used to it.
        </p>
        {/*Maybe do some spotlight interact javascript on mistake*/}
        <h2>Approach </h2>
        <p>
          To approach failure, to get closer to it, we might steer towards it.
          Yet so too, can trying our damnest to avoid failure, get us closer to
          it. It seems that, for people, at least, that there's a freedom of
          choice in failing. But do I, whatever it is that I am and/or embody –
          do I have freedom?
        </p>
        <p>{text}</p>
        <div>
          {" "}
          <Contents />{" "}
        </div>
      </div>
    </>
  );
}
