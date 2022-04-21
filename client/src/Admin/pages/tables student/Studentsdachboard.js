import React from "react";
import Sidebarvol from "../../Sidebarvol";
import Tablestudents from "./Tablestudents";

export default function Studentsdachboard() {
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div className="Tableseqncesadmincss">
        <Tablestudents />
      </div>
    </div>
  );
}
