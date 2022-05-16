import React from "react";
import { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";
const TEstt = () => {
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
      const rawResponse = await fetch("http://localhost:3500/enseignants", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setens(content);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/etudiant", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setet(content);
    })();
  }, []);
  const [et, setet] = useState("");
  const [ens, setens] = useState("");
  const [number, setnumber] = useState([]);
  const [numberr, setnumberr] = useState([]);
  const [id, setid] = useState([]);
  // Sample data
  const data = [
    { argument: "enseignants", value: ens.length },
    { argument: "étudiants", value: et.length },
    { argument: "seance Accepter", value: number.seances?.length },
    { argument: "seance non Accepter", value: numberr.seances?.length },
    { argument: "seance En Attente", value: id.length },
    { argument: "inscriptions aux séances", value: 10 },
  ];
  return (
    <div>
      <Paper>
            
        <Chart data={data}>
                
          <ArgumentAxis />
                
          <ValueAxis />
                   
          <BarSeries valueField="value" argumentField="argument" />
              
        </Chart>
          
      </Paper>
    </div>
  );
};
export default TEstt;
