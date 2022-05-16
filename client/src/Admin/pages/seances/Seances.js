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
      <div style={{ width: "100%" }}>
        <Tableseqncesadmin />
      </div>
      <h2 className="h2Pageenseignant">seances existants</h2>
      <div>
        <TableSeancedejaExist />
      </div>
    </div>
  );
}
