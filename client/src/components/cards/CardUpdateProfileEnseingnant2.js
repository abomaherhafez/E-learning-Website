import React from "react";
import { useState } from "react";
import "./CardsSeance.css";

export default function CardUpdateProfileEnseingnant2() {
  const [name, setName] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
    spécialité: "ibn ",
    DateOfBirth: "",
    email: "",
  });
  const handleclick = () => {
    console.log(name);
  };
  return (
    <div className="elKbira-BlKol">
      <div>
        <label>lastname:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        ></input>
      </div>
      <div>
        <label>firstname:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        ></input>
      </div>
      <div>
        <label>date of birth:</label>
        <br />
        <input className="tarki7Input" type="date" value={name.DateOfBirth} />
      </div>
      <div>
        <label>numéro de téléphone:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          onChange={(e) => setName({ ...name, phone: e.target.value })}
        ></input>
      </div>

      <div>
        <label>spécialité:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          onChange={(e) => setName({ ...name, spécialité: e.target.value })}
        ></input>
      </div>
      <div>
        <label>email:</label>
        <br></br>
        <input
          className="tarki7Input"
          type="text"
          onChange={(e) => setName({ ...name, email: e.target.value })}
        ></input>
      </div>
      <div className="divbutt">
        <button className="butt" onClick={handleclick}>
          <span className="text">update</span>
        </button>
      </div>
    </div>
  );
}
