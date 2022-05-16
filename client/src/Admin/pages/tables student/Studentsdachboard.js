import React from "react";
import Sidebarvol from "../../Sidebarvol";
import Tablestudents from "./Tablestudents";

export default function Studentsdachboard() {
  return (
    <div>
      <div className="one h11">
        <h1 className="h11 h2Pageenseignant">etudiants existants</h1>
      </div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div>
        <Tablestudents />
      </div>
    </div>
  );
}
