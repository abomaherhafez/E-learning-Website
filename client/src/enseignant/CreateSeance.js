import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./CreateSeance.css";

export default function CreateSeance() {
  const [date, setdate] = useState({});
  const [seance, setseance] = useState({
    title: "",
    date: "",
    duree: "",
    heureDebut: "",
    heureFin: "",
    dec: "",
    file: "",
    lienZoom: "",
  });

  return (
    <div>
      <div className="login-form">
        <NavBar />
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>cree seance</h1>
          <div className="content">
            <div className="input-field">
              <input
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
                  setdate({ ...date, text: e.target.value });
                  setseance({ ...seance, date: e.target.value });
                  console.log(date);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="duree"
                onChange={(e) => {
                  setseance({ ...seance, duree: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="heure-début"
                onChange={(e) => {
                  setseance({ ...seance, heureDebut: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="heure-fin"
                onChange={(e) => {
                  setseance({ ...seance, heureFin: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <textarea
                className="textareawidth"
                placeholder="description"
                onChange={(e) => {
                  setseance({ ...seance, dec: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="input-field">
              <input
                type="file"
                placeholder=""
                onChange={(e) => {
                  setseance({ ...seance, file: e.target.value });
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="lien-zoom"
                onChange={(e) => {
                  setseance({ ...seance, lienZoom: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="action">
            <button
              type="submit"
              onClick={() => {
                console.log(seance);
              }}
            >
              cree seance
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
