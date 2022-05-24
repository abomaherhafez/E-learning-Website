import React from "react";
import "./AccountEnseignant.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import "./tesr.css"
import Card11 from "./Card11";
import Testfooter from "../components/Testfooter";
import TESTT from "./TESTT";

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
        <div className="card-list">
          {reverse.map((e) => (
            <TESTT key={e._id} e={e} />
          ))}

        </div>


        <div className="divtable"></div>
      </div>
      <Testfooter />
    </div>
  );
}
