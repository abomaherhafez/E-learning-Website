import React from "react";
import { useState } from "react";
import "./CardsSeance.css";

export default function CardsSeance() {
  const [seance, setseance] = useState({
    date: "2022-07-22",
    tilte: "El title",
    duree: "3:30hours",
    heureDebut: "22:30",
    heurefin: "2:00",
    dec: "lroem qjvh;ghqn knqbjimqkbjq hj q, qjh q qjkjgcjgh;gj",
    lienZoom: "https://www.google.com/",
    fichierlien: "http://www.africau.edu/images/default/sample.pdf",
  });

  return (
    <div className="elKbira-BlKol">
      <img
        src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
        className="imagee"
      />
      <div>
        <label>Tilte:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.tilte}
          readOnly
        ></input>
      </div>
      <div>
        <label>Date:</label>
        <br />
        <input
          className="tarki7Input"
          type="date"
          value={seance.date}
          readOnly
        ></input>
      </div>
      <div>
        <label>Durre:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.duree}
          readOnly
        />
      </div>
      <div>
        <label>heureDebut:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.heureDebut}
          readOnly
        ></input>
      </div>
      <div>
        <label>heurefin:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.heurefin}
          readOnly
        ></input>
      </div>
      <div>
        <label>description:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.dec}
          readOnly
        ></input>
      </div>
      <div>
        <label>lienZoom:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.lienZoom}
          readOnly
        ></input>
      </div>
      <div>
        <label>el fichier title</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={seance.fichierlien}
          readOnly
        ></input>
      </div>
    </div>
  );
}
