import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./homestudent.css";
import { useState, useEffect } from "react";
import Cardseancecc from "./Cardseancecc";
import Testfooter from "../components/Testfooter";
import Cardseance from "./Cardseance";
export default function MonSéances() {
  const idd = localStorage.getItem("idseance");
  const id = localStorage.getItem("id");

  const [seancesaaccept, setseancesaaccept] = useState([]);
  const [seanceenattene, setseanceenattene] = useState([]);

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getSeanceAssisterEnAttente/" + id,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      const content = await rawResponse.json();
      console.log(content);
      setseanceenattene(content);
    })();
  }, [true]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getSeanceAssisterAccepter/" + id,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      const content = await rawResponse.json();
      console.log(content);
      setseancesaaccept(content);
    })();
  }, [true]);

  return (
    <div>
      <NavBar />
      <div className="one h11">
        <h1 className="h11"> seance en attente </h1>
      </div>
      <div className="contentccccccccccccccccc">
        <main className="main-area">
          <section className="cards">
            {seanceenattene.map((element) => (
              <Cardseance key={element._id} element={element} />
            ))}
          </section></main></div>
      <div className="one h11">
        <h1 className="h11">votre seance</h1>
      </div>
      <div className="contentccccccccccccccccc">
        <main className="main-area">
          <section className="cards">
            {seancesaaccept.map((element) => (
              <Cardseancecc key={element._id} element={element} />
            ))}
          </section></main></div>
      <Testfooter />
    </div>
  );
}
