import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./CreateSeance.css";
import { useHistory } from "react-router-dom";
import Testfooter from "../components/Testfooter";

export default function CreateSeance() {
  const [visibility, setvisibility] = useState("hidden");
  const [visibilityy, setvisibilityy] = useState("hidden");
  const id = localStorage.getItem("id");
  const history = useHistory();

  const [seance, setseance] = useState({
    title: "",
    date: "",
    heureDebut: "",
    heureFin: "",
    description: "",
    lienZoom: "",
    enseignantId: id,
  });

  return (
    <div>
      <div className="login-form">
        <NavBar />
        <form
          onSubmit={(event) => {
            event.preventDefault();

            console.log(seance);
            (async () => {
              const rawResponse = await fetch(
                "http://localhost:3500/creerseance",
                {
                  method: "post",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(seance),
                }
              );

              const content = await rawResponse.json();
              console.log(content);
              if (content._message === "Seance validation failed") {
                setvisibility("visible");
                setvisibilityy("");
              } else {
                setvisibilityy("visible");
                setvisibility("");
                localStorage.setItem("idseance", content._id);
                history.push("/ee");
              }
            })();
          }}
        >
          <h1>créer séance</h1>
          <div className="content">
            <div className="input-field">
              <input
                required
                type="text"
                placeholder="title"
                onChange={(e) => {
                  setseance({ ...seance, title: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="date"
                placeholder="date-séance"
                onChange={(e) => {
                  setseance({ ...seance, date: e.target.value });
                }}
                required
              />
            </div>
            <div className="input-field">
              <label>heure-début</label>
              <input
                placeholder="heure-début"
                type="time"
                onChange={(e) => {
                  setseance({ ...seance, heureDebut: e.target.value });
                  console.log(seance.heureDebut);
                }}
                required
              />
              {/*<input
                type="text"
                placeholder="heure-début"
                onChange={(e) => {
                  setseance({ ...seance, heureDebut: e.target.value });
                }}
              />*/}
            </div>
            <div className="input-field">
              <label>heure-fin</label>
              <input
                placeholder="heure-fin"
                type="time"
                onChange={(e) => {
                  setseance({ ...seance, heureFin: e.target.value });
                }}
                required
              />
              {/*<input
                required
                type="text"
                placeholder="heure-fin"
                onChange={(e) => {
                  setseance({ ...seance, heureFin: e.target.value });
                }}
              />*/}
            </div>
            <div className="input-field">
              <input
                required
                type="url"
                placeholder="lien-zoom"
                onChange={(e) => {
                  setseance({ ...seance, lienZoom: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <textarea
                required
                className="textareawidth"
                placeholder="description"
                onChange={(e) => {
                  setseance({ ...seance, description: e.target.value });
                }}
              ></textarea>
            </div>

          </div>
          {visibilityy === "visible" ? (
            <p style={{ textAlign: "center" }}>
              Une demande de création de seance a été envoyée
            </p>
          ) : (
            <></>
          )}
          {visibility === "visible" ? (
            <p style={{ textAlign: "center" }}>
              La demande de création de seance n'a pas été envoyée
            </p>
          ) : (
            <></>
          )}
          <div className="action">
            <button type="submit">créer séance</button>
          </div>
        </form>
      </div>
      <Testfooter />
    </div>
  );
}
