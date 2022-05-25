import React from "react";

export default function SeqnceqfichheCard(props) {
  return (
    <div>
      <div className="card card010">
        <article>
          <picture className="thumbnail">
            <img src="https://s35691.pcdn.co/wp-content/uploads/2021/08/young-man-with-computer-fills-schedule-calendar-and-complete-business-vector-id1161496973.jpg" />
          </picture>
          <div className="card-content">
            <h2 style={{ textAlign: "center" }}> {props.affiche.title}</h2>

            <div style={{
              display: "flex"
              , justifyContent: "space-between"
            }}>
              {" "}
              <p style={{ fontSize: "120%" }}>
                heure de Debut: {props.affiche.heureDebut}
              </p>
              <p style={{ fontSize: "120%" }}>
                heure de Fin {props.affiche.heureFin}{" "}
              </p>
            </div>
            <p style={{ fontSize: "120%" }}>
              lien de séance :{props.affiche.lienZoom}{" "}
            </p>

            <p style={{ fontSize: "120%" }}>description:</p>
            <p>{props.affiche.description}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

/*   <div className="cont-tarki77 div3laleft">
     <section>
       <img src="https://i.pinimg.com/originals/5f/91/4f/5f914f96220e0f4b734fb1f6afc86e8d.jpg" />
       <h2>{props.affiche.title}</h2>
       <h3>Date de Seance:{props.affiche.date}</h3>
       <h4> description:{props.affiche.description}</h4>

       <div className="divinsameline">
         <h5 className="tab3edmabielh5">
           Heure de Debut: {props.affiche.heureDebut}
         </h5>
         <h5>Heure de Fin:{props.affiche.heureFin} </h5>
       </div>
       <h4>lien seance: {props.affiche.lienZoom}</h4>
     </section>
   </div>*/