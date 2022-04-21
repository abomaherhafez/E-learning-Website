import React from "react";
import Sidebarvol from "../../Sidebarvol";
import TableSeancedejaExist from "./TableSeancedejaExist";
import Tableseqncesadmin from "./Tableseqncesadmin";

export default function Seances() {
  const style = { marginBottom: "60px" };
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div className="Tableseqncesadmincss">
        <Tableseqncesadmin />
      </div>
      <h2 className="h2Pageenseignant">seances existants</h2>
      <div style={style} className="Tableseqncesadmincss">
        <TableSeancedejaExist />
      </div>
    </div>
  );
}
