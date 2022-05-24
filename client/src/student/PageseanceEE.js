import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Testfooter from "../components/Testfooter";
import "./PageEE.css"
import { useHistory } from "react-router-dom";
export default function PageseanceEE() {
  const history = useHistory();
  const id = localStorage.getItem("idseance");
  const idd = localStorage.getItem("id");
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seance/" + id, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      console.log(content);
      setaffiche(content);
    })();
  }, []);
  const [affiche, setaffiche] = useState([]);
  const [deamand, setdeamand] = useState();

  return (
    <div>
      <NavBar />
      <section id="info">
        <div className="rowrowrow">
          <div className="cardddddddddddddddddddd">
            <h2>{affiche.title}</h2>
            <p>{affiche.description}</p>
            <p style={{
              textAlign: "center", color: "white", fontSize: "20px"
            }}>Date de séance:{affiche.date}</p>
            <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <p style={{ color: "white", fontSize: "20px" }}> Heure de Debut: {affiche.heureDebut}</p>
              <p style={{ color: "white", fontSize: "20px" }}>Heure de Fin:{affiche.heureFin}</p>

            </div>
            <button
              className="buttborderpageee" style={{ margin: "auto", }}
              onClick={() => {
                (async () => {
                  const rawResponse = await fetch(
                    "http://localhost:3500/assisterSeance",
                    {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ sId: id, etId: idd }),
                    }
                  );

                  const content = await rawResponse.json();
                  if (content.sId == id && content.etId == idd) {
                    setdeamand(true);
                    history.push("./mon-séances");
                  } else {
                    setdeamand(false);
                  }
                })();
              }}
            ><p style={{ textAlign: "center", color: "black", marginTop: "10px" }}>
                Demande de participation</p>
            </button>
            {deamand === true ? (
              <p style={{ textAlign: "center", marginTop: "30px", color: "red" }}>
                La demande de participation a été envoyée
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>

      </section>

      <div><Testfooter /> </div>
    </div>
  );
}
/* <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="cont-tarki77 ">
            <section>
              <img
                style={{ width: "100%" }}
                src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg"
              />
              <h2>{affiche.title}</h2>
              <h3>Date de Seance:{affiche.date}</h3>
              <h4> description:{affiche.description}</h4>

              <div className="divinsameline">
                <h5 className="tab3edmabielh5">
                  Heure de Debut: {affiche.heureDebut}
                </h5>
                <h5>Heure de Fin:{affiche.heureFin} </h5>
              </div>
              <div style={{ display: "flex", justifyContent: " center" }}>
                <button
                  className="butt"
                  onClick={() => {
                    (async () => {
                      const rawResponse = await fetch(
                        "http://localhost:3500/assisterSeance",
                        {
                          method: "post",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ sId: id, etId: idd }),
                        }
                      );

                      const content = await rawResponse.json();
                      if (content.sId == id && content.etId == idd) {
                        setdeamand(true);
                      } else {
                        setdeamand(false);
                      }
                    })();
                  }}
                >
                  <span className="text">Demande de participation</span>
                </button>
              </div>
              {deamand === true ? (
                <p style={{ textAlign: "center" }}>
                  La demande de participation a été envoyée
                </p>
              ) : (
                <></>
              )}
            </section>
          </div>
        </div>
      </div>*/ 