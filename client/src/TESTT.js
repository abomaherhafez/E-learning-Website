import React from "react";
import "./TESTT.css";
import { useState } from "react";
import SeqnceqfichheCard from "./Admin/Cards/SeqnceqfichheCard";

export default function TESTT() {
  const [Enseignant, setEnseignant] = useState([
    {
      id: 1,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      spécialité: "spécialité",
    },
    {
      id: 2,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      spécialité: "informatique",
    },
    {
      id: 3,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      spécialité: "science",
    },
    {
      id: 4,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      spécialité: "hellobqbe",
    },
    {
      id: 5,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      spécialité: "n7ebk mot",
    },
  ]);
  const ahmed = Enseignant;
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
          {ahmed.map((e) => (
            <div className="table-content">
              <div className="table-row">
                <div className="table-data">{e.name}</div>
                <div className="table-data">{e.firstname}</div>
                <div className="table-data">{e.email}</div>
                <div className="table-data">{e.spécialité}</div>

                <div className="table-data">
                  <div
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setEnseignant(ahme);
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
