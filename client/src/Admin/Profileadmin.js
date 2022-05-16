import React from "react";
import Sidebarvol from "./Sidebarvol";
import "./profileadmin.css";
import { useState } from "react";

export default function Profileadmin() {
  const [name, setName] = useState({ email: "", password: "" });
  const [sucss, setsucss] = useState();
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div className="login-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1>créer un profil </h1>
          <div className="content">
            <div className="input-field">
              <input
                onChange={(e) => setName({ ...name, email: e.target.value })}
                type="email"
                placeholder="nouveau Email"
              />
            </div>
            <div className="input-field">
              <input
                onChange={(e) => setName({ ...name, password: e.target.value })}
                type="password"
                placeholder="nouveau mot de passe"
              />
            </div>
            <button
              className="butt"
              onClick={() => {
                (async () => {
                  const rawResponse = await fetch(
                    "http://localhost:3500/api/registerAdmin",
                    {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(name),
                    }
                  );

                  const content = await rawResponse.json();

                  console.log(content);
                  if (content.msg == "success") {
                    setsucss(true);
                  }
                  if (content._message == "Admin validation failed") {
                    setsucss(false);
                  }
                })();
              }}
            >
              créer
            </button>
            {sucss == true ? (
              <p style={{ textAligni: "center" }}>Compte créé</p>
            ) : (
              <></>
            )}
            {sucss == false ? (
              <p style={{ textAligni: "center" }}> compte non validé</p>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
