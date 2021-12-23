import * as React from "react";
import Contents from "../components/contents";
import Browser from "../components/browser";
import Randompage from "../components/randompage";
import ButtonChange from "../components/buttonchange";
import { AnimatePresence, motion } from "framer-motion";

//glitch intro for home https://codepen.io/team/nclud/pen/MwaGGE

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Browser />

      <AnimatePresence>
        <motion.h1
          exit={{ opacity: 0, y: -50 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          &lt;MetaSite/&gt;
        </motion.h1>
      </AnimatePresence>

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
    </motion.div>
  );
}
