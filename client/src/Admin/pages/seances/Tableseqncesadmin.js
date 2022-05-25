import React from "react";
import { useState, useEffect } from "react";
import SeqnceqfichheCard from "../../Cards/SeqnceqfichheCard";
import "./tableseanczes.css";

export default function Tableseqncesadmin() {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seanceEnAttente", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setid(content);
      console.log(content);
    })();
  }, []);
  const [id, setid] = useState([]);
  const [affiche, setaffiche] = useState();


  return (
    <div>
      <div className="containerrrr">
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <p className="filter__link">Titre</p>
            </div>
            <div className="header__item">
              <p className="filter__link">DATE</p>
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
          {id.map((e) => (
            <div key={e._id} className="table-content">
              <div className="table-row">
                <div className="table-data">{e.title}</div>
                <div className="table-data">{e.date}</div>
                <div className="table-data">{e.heureDebut}</div>
                <div className="table-data">{e.heureFin}</div>
                <div className="table-data">{e.lienZoom}</div>
                <div className="table-data">{e.enseignantId}</div>
                <div className="table-data">
                  <div
                    className="success"
                    style={{
                      width: "100%" /*
                      borderStyle: "dashed",
                      borderColor: "#008300",
                    */,
                    }}
                    onClick={() => {
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/statutSeance/" + e._id,
                          {
                            method: "post",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ test: true }),
                          }
                        );

                        const content = await rawResponse.json();

                        console.log(content);
                      })();
                      /*
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setseance(ahme);-*/
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/seanceEnAttente",
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
                        setid(content);
                        console.log(content);
                      })();
                    }}
                  >
                    Acceptation
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: "3px",
                      marginBottom: "3px"
                      /*border: "1px  dashed  #e30000",
                      borderRadius: "5px",
                     
                      borderColor: "#04AA6D",
                      Color: "green",*/
                    }}
                    className="danger"
                    onClick={() => {
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/statutSeance/" + e._id,
                          {
                            method: "post",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ test: false }),
                          }
                        );

                        const content = await rawResponse.json();

                        console.log(content);
                      })();

                      /*
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setseance(ahme);
                      
                      */
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/seanceEnAttente",
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
                        setid(content);
                        console.log(content);
                      })();
                    }}
                  >
                    Refus
                  </div>
                  <div
                    className="info"
                    onClick={() => {
                      if (affiche == undefined) {
                        setaffiche(e);
                      }
                      else {
                        setaffiche(undefined)
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
            margin: "auto"
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
