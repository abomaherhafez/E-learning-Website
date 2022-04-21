import React from "react";

export default function SeqnceqfichheCard(props) {
  return (
    <div>
      <div className="cont-tarki77 div3laleft">
        <section>
          <h2>{props.affiche.tilte}</h2>
          <img src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg" />
          <h3>Date de Seance:{props.affiche.date}</h3>
          <h4>{props.affiche.dec}</h4>
          <h4>duree:{props.affiche.duree}</h4>
          <div className="divinsameline">
            <h5 className="tab3edmabielh5">
              Heure de Debut: {props.affiche.heureDebut}
            </h5>
            <h5>Heure de Fin:{props.affiche.eheurefin} </h5>
          </div>
          <h4>lien seance: {props.affiche.lienZoom}</h4>
        </section>
      </div>
    </div>
  );
}
