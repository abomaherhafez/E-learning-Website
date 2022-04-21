import React from "react";
import { useState } from "react";
import "../seances/tableseanczes.css";

export default function Tablestudents() {
  const stylethEmail = { paddingLeft: " 140px" };
  const [student, setstudent] = useState([
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
  const ahmed = student;
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr className="trforthed">
              <th>nom </th>
              <th>prenom</th>
              <th style={stylethEmail}>Email</th>
              <th>niveau</th>
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
                    style={{ "margin-left": "50px" }}
                    className="divbutt"
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setstudent(ahme);
                    }}
                  >
                    supprimer
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
