import * as React from "react";
import Contents from "../components/contents";
import Browser from "../components/browser";
import Randompage from "../components/randompage";
import ButtonChange from "../components/buttonchange";

export default function Home() {
  return (
    <>
      <Browser />

      <h1>&lt;MetaSite/&gt;</h1>

      <p className="sub-text">
        <strong>Why</strong> and <strong>How</strong> do I exist and who, or
        rather, what, the hell cares anyway?
      </p>

      <Randompage />

      <ButtonChange />

      <div>
        <h2>Change and Variation</h2>
        <p>
          The world constantly undergoes change, as per the second law of
          Thermodynamics, but especially with technology. So I'll be lost in the
          world of old if I'm not updated. Whilst status quos get disrupted and
          good things can be lost, there is great opportunity for creative
          replacement. This sometimes results in things like variation.
        </p>
      </div>

      <Contents />
    </>
  );
}
