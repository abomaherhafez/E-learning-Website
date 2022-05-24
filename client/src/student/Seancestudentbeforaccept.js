import React from "react";
import Cardseancestudentinside from "../components/cards/Cardseancestudentinside";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import Testfooter from "../components/Testfooter";

export default function Seancestudentbeforaccept() {
  return (
    <div>
      <NavBar />
      <Cardseancestudentinside />
      <div>
        <Testfooter />
      </div>
    </div>
  );
}
