import React from "react";
import Card from "../cards/Card";
import Card1 from "../cards/Card1";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";
import "./About.css";
export default function About() {
  const x = window.location.href;
  console.log(x);
  return (
    <div>
      <NavBar />
      <div className="about">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <Footer />
    </div>
  );
}
