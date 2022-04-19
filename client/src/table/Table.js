import React, { useState } from "react";

import "./Table.css";

export default function Table() {
  const [students, setstudents] = useState([
    {
      id: 1,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "aceepte",
    },
    {
      id: 2,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "aceepte",
    },
    {
      id: 3,
      name: "ahmed",
      firstname: "asad",
      email: "ahmed@ahmed.com",
      status: "aceepte",
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
    <table>
      <thead>
        <tr>
          <th>prenom</th>
          <th>nom</th>
          <th>Email</th>
          <th>status</th>
          <th>action </th>
        </tr>
      </thead>
      <tbody>
        {students.map((e) => (
          <tr>
            <td>{e.name}</td>
            <td>{e.firstname}</td>
            <td>{e.email}</td>
            <td>{e.status}</td>
            <td>
              <button
                onClick={() => {
                  ahmed.map((ee) => {
                    if (ee.id === e.id) {
                      ee.status = "aceepte";
                    }
                  });
                  setstudents(ahmed);
                }}
              >
                accepte
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
