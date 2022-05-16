import React from "react";
import Sidebarvol from "../../Sidebarvol";
import TableEnseginantelmajoud from "../tables enseignant/TableEnseginantelmajoud";
import Tablestudents from "../tables student/Tablestudents";

export default function Users() {
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div className="one h11">
        <h2 className="h11 h2Pageenseignant">Enseignants</h2>
      </div>
      <div>
        <TableEnseginantelmajoud />
      </div>
      <div className="one h11">
        <h3 className="h11 h2Pageenseignant">étudiants</h3>
      </div>

      <div>
        <Tablestudents />
      </div>
    </div>
  );
}
