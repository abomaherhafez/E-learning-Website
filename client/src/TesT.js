import React from "react";
import { useState } from "react";
import axios from "axios";

export default function TesT() {
  const [seance, setseance] = useState({ h: "hiiiiiiiiii" });
  const [t, sett] = useState();

  return (
    <div>
      TesT
      <button
        onClick={() => {
          axios
            .get("http://localhost:3500/seances")
            .then((res) => {
              setseance(res.data.seances);
              sett("t");
              console.log(seance);
            })
            .catch((err) => console.error(err));
        }}
      >
        show
      </button>
      <h2>hello {t}</h2>
    </div>
  );
}
