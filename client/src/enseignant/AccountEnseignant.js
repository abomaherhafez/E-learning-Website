import React from "react";
import "./AccountEnseignant.css";
import Sidebar from "../components/sidebar/Sidebar";
import Card1 from "../components/cards/Card1";
import Table from "../table/Table";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";

export default function AccountEnseignant() {
  return (
    <div>
      <div className="hideELZayed">
        <NavBar />

        <h2 className="seance">votre séances</h2>
        <div className="center-cards">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        <div className="divtable">
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
}
