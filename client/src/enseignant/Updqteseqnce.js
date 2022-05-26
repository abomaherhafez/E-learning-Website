import React from "react";
import CardsSeance from "../components/cards/CardsSeance";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import "./updateseance.css";
import Testfooter from "../components/Testfooter";

export default function Updqteseqnce() {
  const [seance, setseance] = useState({
    date: "",
    tilte: "",
    duree: "",
    heureDebut: "",
    heurefin: "",
    dec: "",
    lienZoom: "",
    fichierlien: "",
  });
  const handleclick = () => {
    console.log(seance);
  };
  return (
    <div>
      <NavBar />
      <div className="classHome">
        <div className="sidesprop">
          <CardsSeance />
        </div>
        <div className="elKbira-BlKol">
          <img
            src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
            className="imagee"
          />
          {/**/}
          <div>
            <label>Tilte:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, tilte: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>Date:</label>
            <br />
            <input
              className="tarki7Input"
              type="date"
              onChange={(e) => {
                setseance({ ...seance, date: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>Durre:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, duree: e.target.value });
              }}
            />
          </div>
          <div>
            <label>heureDebut:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, heureDebut: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>heurefin:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, heurefin: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>description:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, dec: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>lienZoom:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, lienZoom: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>el fichier title</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => {
                setseance({ ...seance, fichierlien: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",

          alignContent: "stretch",
          justifyContent: "center",
        }}
      >
        <button onClick={handleclick} className="butt">
          <span className="text">Mise à jour</span>
        </button>
      </div>
      <Testfooter />
    </div>
  );
}
