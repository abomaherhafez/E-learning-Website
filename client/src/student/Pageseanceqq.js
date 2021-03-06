import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Testfooter from "../components/Testfooter";

export default function Pageseanceqq() {
  const id = localStorage.getItem("idseance");
  const idd = localStorage.getItem("id");
  useEffect(() => {
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
  }, []);
  const [affiche, setaffiche] = useState([]);
  const [deamand, setdeamand] = useState();

  return (
    <div>
      <NavBar />
      <section id="info">
        <div className="rowrowrow">
          <div className="cardddddddddddddddddddd">
            <h2>{affiche.title}</h2>
            <p>{affiche.description}</p>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "20px",
              }}
            >
              Date de séance:{affiche.date}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ color: "white", fontSize: "20px" }}>
                {" "}
                Heure de Debut: {affiche.heureDebut}
              </p>
              <p style={{ color: "white", fontSize: "20px" }}>
                Heure de Fin:{affiche.heureFin}
              </p>
            </div>
            <p style={{ color: "white", fontSize: "26px", marginTop: "8px" }}>
              lien seance:
              <a
                style={{
                  color: "white",
                  fontSize: "18px",
                  textDecoration: "none",
                  color: " #F5B921",
                }}
                href={affiche.lienZoom}
              >
                {" "}
                {affiche.lienZoom}
              </a>
            </p>
          </div>
        </div>
      </section>

      <div>
        <Testfooter />{" "}
      </div>
    </div>
  );
}
/*<div>
<NavBar />
<div>
<div style={{ display: "flex", justifyContent: "center" }}>
<div className="cont-tarki77 ">
<section>
<img
style={{ width: "100%" }}
src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg"
/>
<h2>{affiche.title}</h2>
<h3>Date de Seance:{affiche.date}</h3>
<h4> description:{affiche.description}</h4>

<div className="divinsameline">
<h5 className="tab3edmabielh5">
Heure de Debut: {affiche.heureDebut}
</h5>
<h5>Heure de Fin:{affiche.heureFin} </h5>
</div>
<div style={{ display: "flex", justifyContent: " center" }}></div>
<h4>lien seance: {affiche.lienZoom}</h4>
</section>
</div>
</div>
</div>
</div>
);
}
*/
