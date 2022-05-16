import React from "react";
import { useState } from "react";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";

export default function Cardseancestudentqfteraccept() {
  const [seance, setseance] = useState();
  return (
    <div>
      <NavBar />
      <div className="cont-tarki77 div3laleft">
        <section>
          <h2>{seance.tilte}</h2>
          <img src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg" />
          <h3>Date de Seance:{seance.date}</h3>
          <h4>{seance.dec}</h4>
          <h4>duree:{seance.duree}</h4>
          <div className="divinsameline">
            <h5 className="tab3edmabielh5">
              Heure de Debut: {seance.heureDebut}
            </h5>
            <h5>Heure de Fin:{seance.heurefin} </h5>
          </div>
          <h4>lien seance: {seance.lienZoom}</h4>
        </section>
      </div>
      <Footer />
    </div>
  );
}
