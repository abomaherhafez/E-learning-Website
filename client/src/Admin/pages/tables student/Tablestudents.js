import React from "react";
import { useState, useEffect } from "react";
import "../seances/tableseanczes.css";

export default function Tablestudents() {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/etudiant", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      console.log(content);
      setstudent(content);
    })();
  }, []);

  const stylethEmail = { paddingLeft: " 140px" };
  const [student, setstudent] = useState([]);
  const ahmed = student;
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
              <p className="filter__link filter__link--number">niveau</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">
                numero de telephone
              </p>
            </div>

            <div className="header__item">
              <p className="filter__link filter__link--number">Action</p>
            </div>
          </div>
          {student.map((e) => (
            <div key={e._id} className="table-content">
              <div className="table-row">
                <div className="table-data">{e.lastName}</div>
                <div className="table-data">{e.firstName}</div>
                <div className="table-data">{e.email}</div>
                <div className="table-data">{e.niveau}</div>
                <div className="table-data">{e.phone}</div>

                <div className="table-data">
                  <div
                    style={{ width: "150px", margin: "auto" }}
                    className="danger"
                    onClick={() => {
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/etudiantDEl/" + e._id,
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
                          "http://localhost:3500/etudiant",
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
                        setstudent(content);
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
