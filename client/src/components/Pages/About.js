import React from "react";
import Footer from "../footer/Footer";
import NavBar from "./NavBar";
import "./About.css";
export default function About() {
  const x = window.location.href;
  console.log(x);
  return (
    <div>
      <NavBar />
      <div className="about"></div>
      <Footer />
    </div>
  );
}
