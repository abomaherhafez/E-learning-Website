import React from "react";
import "./Home.css";
import NavBar from "../NavBar";
import Footer from "../footer/Footer";
import Header from "./header/Header";
import Test from "../test/Test";
import Testfooter from "../Testfooter";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Header />
      </div>

      <div>
        <Test />
      </div>

      <div>
        <Testfooter />
      </div>
    </div>
  );
}
