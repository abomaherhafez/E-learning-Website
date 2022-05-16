import React from "react";
import "./AccountEnseignant.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Card11 from "./Card11";

export default function AccountEnseignant() {
  const id = localStorage.getItem("id");
  const [reverse, setreverse] = useState([]);
  useEffect(() => {
    setreverse(seances.reverse());
    console.log(reverse);
  });
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/seanceEnseignant/" + id,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      const content = await rawResponse.json();
      console.log(content);
      setseances(content);
    })();
  }, []);

  const [seances, setseances] = useState([]);
  return (
    <div>
      <div className="hideELZayed">
        <NavBar />
        <div className="one h11">
          <h1 className="h11">votre séances</h1>
        </div>
        <div className="center-cards">
          {reverse.map((e) => (
            <Card11 key={e._id} e={e} />
          ))}
        </div>
        <div className="divtable"></div>
      </div>
      <Footer />
    </div>
  );
}
