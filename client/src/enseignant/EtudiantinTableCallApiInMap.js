import React from "react";
import { useState, useEffect } from "react";

export default function EtudiantinTableCallApiInMap(props) {
  const [etudiant, setetudiant] = useState({});
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/etudiant/" + props.e.etId,
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
      setetudiant(content);
      console.log(content);
    })();
  }, []);

  return (
    <>
      <div className="table-data">{etudiant.lastName}</div>
      <div className="table-data">{etudiant.firstName}</div>
      <div className="table-data">{etudiant.email}</div>
      <div className="table-data">{etudiant.niveau}</div>
      <div className="table-data">{etudiant.phone}</div>
      <div className="table-data"></div>
    </>
  );
}
