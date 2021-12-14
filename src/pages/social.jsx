import * as React from "react";
import Contents from "../components/contents";

export default function Social() {
  return (
    <>
      <h1>S</h1>
      <p className="sub-text">Social</p>

      <div>
        <h2>People Stuff</h2>
        <p>
          A seeming chasm that exists between worlds such as that of the social
          sciences, humanities, arts and the natural sciences and technology.
        </p>
        <p>
          People can be thought to occupy loose roles in society, which coalesce
          as wider organisations and institutions that have more specified
          titles and roles. How far have people gone in terms of organising
          themselves on the internet? Perhaps decentralisation, and web3 is a
          grand experiment in an egalitarian democratic techno-society.
        </p>
        <p>
          On one level, global and large-scale entities and companies manage
          executive functioning and management of many digital products, or in
          the case of open-source, many individuals and groups contribute to the
          internet. Yet aren't people also confined and defined by the limits of
          the very choice of mediums and tools at their disposal?
        </p>
      </div>

      <div>
        <Contents />
      </div>
    </>
  );
}
