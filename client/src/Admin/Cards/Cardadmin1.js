import React from "react";
import "./cardadmin.css";
import { useState, useEffect } from "react";

export default function Cardadmin1(props) {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/enseignants", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setnumber(content);
    })();
  }, []);
  const [number, setnumber] = useState("");

  return (
    <div className="cont-tarki77 bigone">
      <section>
        <h2 className="h2cardadmin">Le nombre d'enseignants</h2>
        <p className="informationdata"> {number.length}</p>
      </section>
    </div>
  );
}
