import React from "react";
import Card1 from "../components/cards/Card1";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./homestudent.css";
import { useState, useEffect } from "react";
import Cardseance from "./Cardseance";

export default function HomeaccountStudent() {
  const idd = localStorage.getItem("idseance");
  const id = localStorage.getItem("id");
  const [seanceenattene, setseanceenattene] = useState([]);
  const [affiche, setaffiche] = useState([]);
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
    {
      (async () => {
        const rawResponse = await fetch(
          "http://localhost:3500/seancesAccepter",
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
        setaffiche(content.seances);
      })();
    }
  }, [true]);

  return (
    <div>
      <NavBar />

      <div className="one h11">
        <h1 className="h11"> seance en attente </h1>
      </div>
      <h3 className="h2placment"> </h3>
      <div className="center-cards">
        {seanceenattene.map((element) => (
          <Cardseance key={element._id} element={element} />
        ))}
      </div>
      <div className="one h11">
        <h1 className="h11">les autre seances</h1>
      </div>
      <div className="center-cards">
        {affiche.map((element) => (
          <Card1 key={element._id} element={element} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
