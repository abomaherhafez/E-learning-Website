import React from "react";
import Card1 from "../components/cards/Card1";
import NavBar from "../components/NavBar";
import "./homestudent.css";
import { useState, useEffect } from "react";
import Testfooter from "../components/Testfooter";
import NewCard from "../NewCard";
import "../Newcard.css"

export default function HomeaccountStudent() {
  const idd = localStorage.getItem("idseance");
  const id = localStorage.getItem("id");
  const [affiche, setaffiche] = useState([]);

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
        <h1 className="h11">les autre seances</h1>
      </div>
      <div className="center-cards">
        {/*affiche.map((element) => (
          <Card1 key={element._id} element={element} />
        ))*/}{" "}
        <div className="outer-wrap">
          <div className="contentccccccccccccccccc">
            <main className="main-area">
              <section className="cards">
                {affiche.map((element) => (
                  <NewCard key={element._id} element={element} />
                ))}

              </section>
            </main>
          </div>
        </div>
      </div>
      <Testfooter />
      {/*<Footer >*/}
    </div>
  );
}
