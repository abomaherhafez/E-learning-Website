import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../seances/tableseanczes.css";
import axios from "axios";
export default function TableEnseignant() {
  /* useEffect(() => {
    async function getResults() {
      const results = await axios.Post(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setEnseignant(results.data);
    }
    getResults();
  }, []);*/
  /*  useEffect(() => {
    axios
      .post('http://localhost:3001/create', refus)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
  };
    
  },[])*/
  const styleemail = { paddingLeft: "180px" };
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
  const [refus, setrefus] = useState({});
  const style = { marginLeft: "15px" };

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
                    style={{ width: "150px", margin: "auto" }}
                    className="success"
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setEnseignant(ahme);
                    }}
                  >
                    Acceptation
                  </div>
                  <div
                    style={{ width: "150px", margin: "auto", marginTop: "5px" }}
                    className="danger"
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setEnseignant(ahme);
                      setrefus(e);
                      console.log(refus);
                    }}
                  >
                    Refus
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
