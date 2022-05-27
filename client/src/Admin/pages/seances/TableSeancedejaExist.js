import React from "react";
import { useState, useEffect } from "react";
import SeqnceqfichheCard from "../../Cards/SeqnceqfichheCard";
import Appartenant from "./Appartenant";
import "./tableseanczes.css";
export default function TableSeancedejaExist() {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seancesAccepter", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setnumber(content.seances);
      console.log(content);
    })();
  }, []);
  const [affiche, setaffiche] = useState();
  const [number, setnumber] = useState([]);

  return (
    <div>
      <div className="containerrrr">
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <p className="filter__link">Titre</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">Date</p>
            </div>

            <div className="header__item">
              <p className="filter__link filter__link--number">
                heure de Debut
              </p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">heure de Fin</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">Lien Zoom</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">appartenant à</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">Action</p>
            </div>
          </div>
          {number.map((e) => (
            <div key={e._id} className="table-content">
              <div className="table-row">
                <div className="table-data">{e.title}</div>
                <div className="table-data">{e.date}</div>
                <div className="table-data">{e.heureDebut}</div>
                <div className="table-data">{e.heureFin}</div>
                <div className="table-data">{e.lienZoom}</div>
                <Appartenant e={e} />
                <div className="table-data">
                  <div
                    className="info"
                    onClick={() => {
                      if (affiche == undefined) {
                        setaffiche(e);
                      } else {
                        setaffiche(undefined);
                      }
                    }}
                  >
                    Afficher la séance
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {affiche != undefined ? (
        <div
          style={{
            width: "50%",
            height: "20%",
            margin: "auto",
          }}
        >
          <SeqnceqfichheCard affiche={affiche} />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
