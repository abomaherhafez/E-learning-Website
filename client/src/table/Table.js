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
    <table className="Table">
      <thead>
        <tr>
          <th className="th thh">prenom</th>
          <th className="th thh">nom</th>
          <th className="th thh">Email</th>
          <th className="th thh">status</th>
          <th className="th thh">action </th>
        </tr>
      </thead>
      <tbody>
        {students.map((e) => (
          <tr>
            <td className="td tdd">{e.name}</td>
            <td className="td tdd">{e.firstname}</td>
            <td className="td tdd">{e.email}</td>
            <td className="td tdd">{e.status}</td>
            <td className="td tdd">
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
