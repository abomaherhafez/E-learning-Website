import React from "react";
import "./cardadmin.css";
import { useState, useEffect } from "react";

export default function Cardadmin4() {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seancesAccepter", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setnumber(content);
      console.log(content);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/seancesNonAccepter",
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
      setnumberr(content);
      console.log(content);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seanceEnAttente", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setid(content);
      console.log(content);
    })();
  }, []);
  const [number, setnumber] = useState([]);
  const [numberr, setnumberr] = useState([]);
  const [id, setid] = useState([]);

  return (
    <>
      <div className="cont-tarki77 bigone  ">
        <section>
          <h2 className="h2cardadmin"> le nompre de seance Accepter</h2>
          <p className="informationdata">{number.seances?.length}</p>
        </section>
      </div>
      <div
        className="cont-tarki77 bigone"
        style={{ backgroundColor: "#ff0018" }}
      >
        <section>
          <h2 className="h2cardadmin"> le nompre de seance non Accepter</h2>
          <p className="informationdata">{numberr.seances?.length}</p>
        </section>
      </div>
      <div
        className="cont-tarki77 bigone bigoneeee "
        style={{ backgroundColor: "cd28dd" }}
      >
        <section>
          <h2 className="h2cardadmin"> le nompre de seance En Attente</h2>
          <p className="informationdata"> {id.length}</p>
        </section>
      </div>
      <div className="cont-tarki77 bigone bigoneeee ">
        <section>
          <h2 className="h2cardadmin">Nombre d'inscriptions aux séances</h2>
          <p className="informationdata"> 5</p>
        </section>
      </div>
    </>
  );
}
