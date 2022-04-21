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
      <h2 className="h2Pageenseignant"> Enseignants </h2>
      <div className="Tableseqncesadmincss">
        <TableEnseginantelmajoud />
      </div>
      <h2 className="h2Pageenseignant"> étudiants </h2>

      <div style={{ marginBottom: "30px" }} className="Tableseqncesadmincss">
        <Tablestudents />
      </div>
    </div>
  );
}
