import React from "react";
import { Link } from "wouter";

export default function Contents() {
  function checkLink() {
    document.getElementById(<Link />).getAttribute("href");
  }

  return (
    <div>
      <h2>Contents</h2>
      <p>
        <Link href="/c">Computer Stuff</Link> - {""}
        <Link href="/f"> Discomfort and Failure</Link> - {""}
        <Link href="/i">The Internet</Link> - {""}
        <Link href="/s">Social Worlds</Link> - {""}
        Learning and Projects - Existence
      </p>
      <p>Later, these can be distributed into simple cards. </p>
    </div>
  );
}
