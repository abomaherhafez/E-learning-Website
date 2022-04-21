import React from "react";
import "./Home.css";
import NavBar from "../NavBar";
import Footer from "../footer/Footer";
import Header from "./header/Header";
import Card1 from "../cards/Card1";
import Test from "../test/Test";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Header />
      </div>
      <div className="home-div-h2">
        <h2 className="classh2"> Nos séances cette semaine</h2>
      </div>
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <div>
        <Test />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
