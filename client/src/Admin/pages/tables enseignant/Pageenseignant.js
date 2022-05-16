import React from "react";
import Sidebarvol from "../../Sidebarvol";
import TableEnseignant from "./TableEnseignant";
import "./Pageenseignant.css";

import TableEnseginantelmajoud from "./TableEnseginantelmajoud";
export default function Pageenseignant() {
  const style = { marginBottom: "60px" };
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>

      <div className="one h11">
        <h1 className="h11 h2Pageenseignant">Enseignants existants</h1>
      </div>
      <h2 className="h2Pageenseignant"> </h2>
      <div>
        <TableEnseginantelmajoud />
      </div>
    </div>
  );
}
