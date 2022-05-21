import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./homestudent.css";
import { useState, useEffect } from "react";
import Cardseancecc from "./Cardseancecc";
export default function MonSéances() {
  const idd = localStorage.getItem("idseance");
  const id = localStorage.getItem("id");

  const [seancesaaccept, setseancesaaccept] = useState([]);

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getSeanceAssisterAccepter/" + id,
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
      setseancesaaccept(content);
    })();
  }, [true]);

  return (
    <div>
      <NavBar />
      <div className="one h11">
        <h1 className="h11">votre seance</h1>
      </div>
      <h3 className="h2placment"> </h3>
      <div className="center-cards">
        {seancesaaccept.map((element) => (
          <Cardseancecc key={element._id} element={element} />
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
}
