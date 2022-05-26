import React from "react";
import "./CardsSeance.css";

export default function Cardseance2() {
  const handleclick = () => {
    console.log("abomaher");
  };
  return (
    <div className="eliakbermnlkbira">
      <div className="elKbira-BlKol">
        <div>
          <label>Tilte:</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
        <div>
          <label>Date:</label>
          <br />
          <input className="tarki7Input" type="date"></input>
        </div>
        <div>
          <label>Durre:</label>
          <br />
          <input className="tarki7Input" type="text" />
        </div>
        <div>
          <label>heureDebut:</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
        <div>
          <label>heurefin:</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
        <div>
          <label>description:</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
        <div>
          <label>lienZoom:</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
        <div>
          <label>el fichier title</label>
          <br />
          <input className="tarki7Input" type="text"></input>
        </div>
      </div>
      <div className="divbutt">
        <button onClick={handleclick} className="butt">
          <span className="text">Mise à jour</span>
        </button>
      </div>
    </div>
  );
}
