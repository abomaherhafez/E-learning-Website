import React from "react";
import { useState, useEffect } from "react";

export default function Appartenant(props) {
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/enseignant/" + props.e.enseignantId,
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
      setEnseignant(content);
    })();
  }, []);
  const [Enseignant, setEnseignant] = useState([]);

  return <div className="table-data">{Enseignant.email}</div>;
}
