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
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
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
