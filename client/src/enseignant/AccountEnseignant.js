import Card from "../components/cards/Card";
import React from "react";
import "./AccountEnseignant.css";
import Sidebar from "../components/sidebar/Sidebar";

export default function AccountEnseignant() {
  return (
    <div className="hideELZayed">
      <Sidebar />
      <h2 className="seance">votre séances</h2>
      <div className="center-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
