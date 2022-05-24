import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import TAbleensingntEtudiant from "./TAbleensingntEtudiant";
import TableEtudiantaccepter from "./TableEtudiantaccepter";
import Testfooter from "../components/Testfooter";

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="card card010">
            <article>
              <picture className="thumbnail">
                <img src="https://s35691.pcdn.co/wp-content/uploads/2021/08/young-man-with-computer-fills-schedule-calendar-and-complete-business-vector-id1161496973.jpg" />
              </picture>
              <div className="card-content">
                <h2 style={{ textAlign: "center" }}> {affiche.title}</h2>

                <div style={{
                  display: "flex"
                  , justifyContent: "space-between"
                }}>
                  {" "}
                  <p style={{ fontSize: "120%" }}>
                    heure de Debut: {affiche.heureDebut}
                  </p>
                  <p style={{ fontSize: "120%" }}>
                    heure de Fin {affiche.heureFin}{" "}
                  </p>
                </div>
                <p style={{ fontSize: "120%" }}>
                  lien de séance :{affiche.lienZoom}{" "}
                </p>

                <p style={{ fontSize: "120%" }}>description:</p>
                <p>{affiche.description}</p>
              </div>
            </article>
            <div>
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
      {affiche.statu == "accepter" ? (
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
      ) : (
        <></>
      )}
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
      <Testfooter />
    </div>
  );
}
/* <article className="card">

      <picture className="thumbnail">
        <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
        />
      </picture>
      <div className="card-content">
        <h2> {affiche.title}</h2>
        <p className='cardparagrphe'>{affiche.description}</p>
      </div>
      <button style={{
        width: "50%"
        , margin: "auto"
      }}
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", affiche._id);
          history.push("./ee");
        }}
      >
        pour plus d'infos
      </button>
    </article>
    
    
    
    
     <section>
              <img src="https://s35691.pcdn.co/wp-content/uploads/2021/08/young-man-with-computer-fills-schedule-calendar-and-complete-business-vector-id1161496973.jpg" />
              <h2>{affiche.title}</h2>
              <p>Date de Seance:{affiche.date}</p>
              <p> description:{affiche.description}</p>

              <div className="divinsameline">
                <p className="tab3edmabielh5">
                  Heure de Debut: {affiche.heureDebut}
                </p>
                <p>Heure de Fin:{affiche.heureFin} </p>
              </div>
              <p>lien seance: {affiche.lienZoom}</p>
              <p>la condition: {affiche.statu}</p>
            </section>*/
