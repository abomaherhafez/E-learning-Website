import React from "react";
import Sidebarvol from "../../Sidebarvol";
import TableSeancedejaExist from "./TableSeancedejaExist";
import Tableseqncesadmin from "./Tableseqncesadmin";

export default function Seancesdéjèaccepté() {
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>

      <h2 className="h2Pageenseignant">seances existants</h2>
      <div>
        <TableSeancedejaExist />
      </div>
    </div>
  );
}
//seancesDejaaccpe
