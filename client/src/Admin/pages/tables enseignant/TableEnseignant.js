import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../seances/tableseanczes.css";
import axios from "axios";
export default function TableEnseignant() {
  useEffect(() => {
    async function getResults() {
      const results = await axios.Post(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setEnseignant(results.data);
    }
    getResults();
  }, []);
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
      <div>
        <table>
          <thead>
            <tr className="trforthed">
              <th>nom </th>
              <th>prenom</th>
              <th style={styleemail}>Email</th>
              <th>spécialité</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {ahmed.map((e) => (
              <tr>
                <td className="tdtrTbodypadding">{e.name}</td>
                <td className="tdtrTbodypadding">{e.firstname}</td>
                <td className="tdtrTbodypadding">{e.email}</td>
                <td className="tdtrTbodypadding">{e.spécialité}</td>

                <td className="tdtrTbodypadding">
                  <button
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
                  </button>
                  <button
                    style={style}
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setEnseignant(ahme);
                    }}
                  >
                    Acceptation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
