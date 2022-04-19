import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import Table from "../table/Table";

export default function SeanceEnsginent() {
  return (
    <div>
      <NavBar />
      <div className="divtable">
        <Table />
      </div>
      <Footer />
    </div>
  );
}
