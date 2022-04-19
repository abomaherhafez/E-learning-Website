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
      <div className="Tableseqncesadmincss">
        <TableEnseignant />
      </div>
      <h2 className="h2Pageenseignant"> Enseignants existants </h2>
      <div style={style} className="Tableseqncesadmincss">
        <TableEnseginantelmajoud />
      </div>
    </div>
  );
}
