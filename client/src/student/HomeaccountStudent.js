import React from "react";
import Card1 from "../components/cards/Card1";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./homestudent.css";
import { useState, useEffect } from "react";

export default function HomeaccountStudent() {
  const idd = localStorage.getItem("id");
  const [affiche, setaffiche] = useState([]);
  const [test, settest] = useState([]);
  const [seancein, setseancein] = useState([]);

  useEffect(() => {
    /*
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/seance/" + id, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      console.log(content);
      setaffiche(content);
    })();
  */
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    const handleClick = (m) => setseancein([...seancein, m]);
    affiche.map((e) => {
      const tt = test.find((elment) => {
        if (e._id == elment.sId && elment.etId == idd) {
          return e;
        }
        setseancein([...seancein, tt]);
      });
      /*test.map((elment) => {
        if (elment.etId == idd && e._id == elment.sId) {
          handleClick(e);
          console.log(seancein);
        } else {
          handleClick(e);
          console.log(elment.etId);
          console.log(idd);
          console.log(e._id);
          console.log(elment.sId);
        }
      })*/
    });
  }, []);
  useEffect(() => {
    {
      (async () => {
        const rawResponse = await fetch(
          "http://localhost:3500/seancesAccepter",
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
        setaffiche(content.seances);
      })();

      (async () => {
        const rawResponse = await fetch("http://localhost:3500/test", {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });

        const content = await rawResponse.json();
        console.log(content);
        settest(content);
      })();
    }
  }, [true]);
  const [tttt, setttttt] = useState([]);

  return (
    <div>
      <NavBar />
      <div className="one h11">
        <h1 className="h11">votre seance</h1>
      </div>
      <h3 className="h2placment"> </h3>
      <div className="center-cards">
        {seancein.map((element) => (
          <Card1 key={element._id} element={element} />
        ))}
      </div>

      <div className="one h11">
        <h1 className="h11">les autre seances</h1>
      </div>
      <div className="center-cards">
        {affiche.map((element) => (
          <Card1 key={element._id} element={element} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
