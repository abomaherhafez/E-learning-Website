import React, { useState } from "react";
import "./Table.css";

export default function TableAdmin() {
  const [students, setstudents] = useState([
    {
      id: 1,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "spécialité",
    },
    {
      id: 2,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "informatique",
    },
    {
      id: 3,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "science",
    },
    {
      id: 4,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "aceepte",
    },
    {
      id: 5,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "non aceepte",
    },
  ]);
  localStorage.setItem("person", JSON.stringify(students));
  const ahmed = JSON.parse(localStorage.getItem("person"));
  return (
    <div>
      <div className="tarki7-el-ajnabb">
        <table>
          <thead className="theadcss">
            <tr className="theadcss">
              <th>prenom</th>
              <th>nom</th>
              <th className="emailcss">Email</th>
              <th>spécialité</th>
              <th>action </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {students.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.firstname}</td>
                <td>{e.email}</td>
                <td>{e.status}</td>
                <td>
                  <button
                    onClick={() => {
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      console.log(ahme);
                      setstudents(ahme);
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
