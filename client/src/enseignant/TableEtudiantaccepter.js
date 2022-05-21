import React from "react";
import { useState, useEffect } from "react";
import "../Admin/pages/seances/tableseanczes.css";
import EtudiantinTableCallApiInMap from "./EtudiantinTableCallApiInMap";
export default function TableEtudiantaccepter() {
  const idd = localStorage.getItem("idseance");
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getEtudiantAssisterAccepter/" + idd,
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
      setid(content);
      console.log(content);
    })();
  }, []);
  const [id, setid] = useState([]);

  return (
    <div>
      <div>
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <p className="filter__link">nom</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">prenom</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">Email</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">niveau</p>
            </div>
            <div className="header__item">
              <p className="filter__link filter__link--number">
                numero de telephone
              </p>
            </div>

            <div className="header__item">
              <p className="filter__link filter__link--number">Action</p>
            </div>
          </div>
          {id.map((e) => {
            return (
              <div key={e._id} className="table-content">
                <div className="table-row">
                  <EtudiantinTableCallApiInMap e={e} />
                  <div className="table-data">
                    <div
                      style={{
                        width: "100%",
                        marginTop: "3px",
                        /*border: "1px  dashed  #e30000",
                        borderRadius: "5px",
                       
                        borderColor: "#04AA6D",
                        Color: "green",*/
                      }}
                      className="danger"
                      onClick={() => {
                        (async () => {
                          const rawResponse = await fetch(
                            "http://localhost:3500/acceptationAssisterSeance/" +
                              e._id,
                            {
                              method: "put",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ ok: false }),
                            }
                          );

                          const content = await rawResponse.json();

                          console.log(content);
                          console.log(e.sId);
                        })();
                        /* (async () => {
                            const rawResponse = await fetch(
                              "http://localhost:3500/getEtudiantAssisterEnAttente/" +
                                idd,
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
                            setid(content);
                            console.log(content);
                          })();*/
                      }}
                    >
                      supprimer
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
