import React from "react";
import { useState } from "react";
import "./CardsSeance.css";

export default function CardUpdateProfileEnseingnant() {
  const [name, setName] = useState({
    lastname: "sisayed",
    firstname: "elkbirawy",
    phone: "00254632",
    password: "hhhhhh",
    spécialité: "ibn kalb",
    DateOfBirth: "2022-07-22",
    email: "kalb@ibnkalb.gmail.com",
  });
  return (
    <div className="elKbira-BlKol">
      <div>
        <img
          className="imagee"
          src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
        ></img>
      </div>
      <div>
        <label>lastname:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={name.lastname}
          readOnly
        ></input>
      </div>
      <div>
        <label>firstname:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={name.firstname}
          readOnly
        ></input>
      </div>
      <div>
        <label>date of birth:</label>
        <br />
        <input
          className="tarki7Input"
          type="date"
          value={name.DateOfBirth}
          readOnly
        />
      </div>
      <div>
        <label>numéro de téléphone:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={name.phone}
          readOnly
        ></input>
      </div>

      <div>
        <label>spécialité:</label>
        <br />
        <input
          className="tarki7Input"
          type="text"
          value={name.spécialité}
          readOnly
        ></input>
      </div>
      <div>
        <label>email:</label>
        <br></br>
        <input
          className="tarki7Input"
          type="text"
          value={name.email}
          readOnly
        ></input>
      </div>
    </div>
  );
}
