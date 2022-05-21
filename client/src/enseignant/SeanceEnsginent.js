import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import TAbleensingntEtudiant from "./TAbleensingntEtudiant";
import TableEtudiantaccepter from "./TableEtudiantaccepter";

export default function SeanceEnsginent() {
  const history = useHistory();

  const id = localStorage.getItem("idseance");
  const [affiche, setaffiche] = useState({});
  const [attente, setattente] = useState(false);
  const [accept, setaccept] = useState(false);

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
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div className="cont-tarki77 div3laleft">
            <section>
              <img src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg" />
              <h2>{affiche.title}</h2>
              <h3>Date de Seance:{affiche.date}</h3>
              <h4> description:{affiche.description}</h4>

              <div className="divinsameline">
                <h5 className="tab3edmabielh5">
                  Heure de Debut: {affiche.heureDebut}
                </h5>
                <h5>Heure de Fin:{affiche.heureFin} </h5>
              </div>
              <h4>lien seance: {affiche.lienZoom}</h4>
              <h4>la condition: {affiche.statu}</h4>
            </section>
            <div>
              {" "}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  history.push("/update seance");
                }}
              >
                Update
              </button>
              <button
                className="dangerrr"
                onClick={() => {
                  (async () => {
                    const rawResponse = await fetch(
                      "http://localhost:3500/effacerseance/" + id,
                      {
                        method: "Delete",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(),
                      }
                    );

                    const content = await rawResponse.json();
                    if (content.acknowledged == true) {
                      history.push("/AccountEnseignant");
                    }
                    console.log(content);
                  })();
                }}
              >
                supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-primary"
          onClick={() => {
            if (attente != true) setattente(true);
            else setattente(false);
          }}
        >
          étudiants en attente
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (accept != true) setaccept(true);
            else setaccept(false);
          }}
        >
          étudiants accepter
        </button>
      </div>
      {attente === true ? (
        <div>
          <TAbleensingntEtudiant />
        </div>
      ) : (
        <></>
      )}
      {accept == true ? (
        <div>
          <TableEtudiantaccepter />
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}
