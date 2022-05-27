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
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getallassisterseance",
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
      setassister(content);
      console.log(content);
    })();
  }, []);
  const [number, setnumber] = useState([]);
  const [numberr, setnumberr] = useState([]);
  const [id, setid] = useState([]);
  const [assister, setassister] = useState([]);

  return (
    <>
      <div className="cont-tarki77 bigone  ">
        <section>
          <h2 className="h2cardadmin"> Séance accepter</h2>
          <p className="informationdata">{number.seances?.length}</p>
        </section>
      </div>
      <div
        className="cont-tarki77 bigone"
        style={{ backgroundColor: "#EF6154" }}
      >
        <section>
          <h2 className="h2cardadmin"> Séance non accepter</h2>
          <p className="informationdata">{numberr.seances?.length}</p>
        </section>
      </div>
      <div
        className="cont-tarki77 bigone bigoneeee "
        style={{ backgroundColor: "#F7B34C" }}
      >
        <section>
          <h2 className="h2cardadmin"> Séance En attente</h2>
          <p className="informationdata"> {id.length}</p>
        </section>
      </div>
      <div
        style={{ background: "#AEB5C1" }}
        className="cont-tarki77 bigone bigoneeee "
      >
        <section>
          <h2 className="h2cardadmin">Inscriptions </h2>
          <p className="informationdata"> {assister.length}</p>
        </section>
      </div>
    </>
  );
}
