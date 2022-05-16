import React from "react";
import { useState, useEffect } from "react";
import "../seances/tableseanczes.css";

export default function TableEnseginantelmajoud() {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/enseignants", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      console.log(content);
      setEnseignant(content);
    })();
  }, []);
  const [Enseignant, setEnseignant] = useState([]);

  return (
    <div>
      <div className="containerrrr">
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <p className="filter__link">nom</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">prenom</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">Email</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">spécialité</p>
            </div>

            <div className="header__item">
              <p className="filter__link filter__link--number">Action</p>
            </div>
          </div>
          {Enseignant.map((e) => (
            <div key={e._id} className="table-content">
              <div className="table-row">
                <div className="table-data">{e.lastName}</div>
                <div className="table-data">{e.firstName}</div>
                <div className="table-data">{e.email}</div>
                <div className="table-data">{e.spécialité}</div>

                <div className="table-data">
                  <div
                    style={{ width: "150px", margin: "auto" }}
                    className="danger"
                    onClick={() => {
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/enseignantdelete/" + e._id,
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
                        console.log(content);
                      })();

                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/enseignants",
                          {
                            method: "get",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(),
                          }
                        );

                        const content = await rawResponse.json();
                        console.log(content);
                        setEnseignant(content);
                      })();
                    }}
                  >
                    supprimer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
