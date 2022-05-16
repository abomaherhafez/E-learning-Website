import React from "react";
import "./Home.css";
import NavBar from "../NavBar";
import Footer from "../footer/Footer";
import Header from "./header/Header";
import Card1 from "../cards/Card1";
import Test from "../test/Test";
import { useState, useEffect } from "react";
export default function Home() {
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
      setnumber(content.seances);
      console.log(content.seances);
    })();
  }, []);
  useEffect(() => {
    var today = new Date(),
      datekbir =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 2) +
        "-" +
        today.getDate();
    var datesmall =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    number.map((e) => {
      var a = 0;
      datesmall < e?.date < datekbir
        ? setaffiche(...affiche, e)
        : console.log("gggg");
    });
    /*if (datesmall < e?.date) {
        a = a + 1;
        console.log(a);
      }
      if (e.date < datekbir) {
        a = a + 1;
        console.log(a);
      }

      if (a == 2) {
        setaffiche(...affiche, e);
        console.log(affiche);
      }
    });
  */
  }, []);
  const [number, setnumber] = useState([]);
  const [date, setdate] = useState();
  const [affiche, setaffiche] = useState([]);
  const [abc, setabc] = useState(false);

  return (
    <div>
      <NavBar />
      <div>
        <Header />
      </div>
      <div className="home-div-h2">
        <h2 className="classh2"> Nos séances cette mois</h2>
        <h2 className="classh2"> hi{affiche[0]?.date}</h2>
      </div>
      {number.map((element) => (
        <Card1 key={element._id} element={element} />
      ))}

      <div>
        <Test />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
