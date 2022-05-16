import React from "react";
import { useState, useEffect } from "react";
import "../Admin/pages/seances/tableseanczes.css";

export default function TAbleensingntEtudiant() {
  const idd = localStorage.getItem("idseance");
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/getEtudiantAssisterEnAttente/" + idd,
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
    })();
  }, []);
  const [id, setid] = useState([]);

  const style = { marginLeft: "15px" };

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
          {id.map((e) => (
            <div key={e._id} className="table-content">
              <div className="table-row">
                <div className="table-data">{e.lastName}</div>
                <div className="table-data">{e.firstName}</div>
                <div className="table-data">{e.email}</div>
                <div className="table-data">{e.niveau}</div>
                <div className="table-data">{e.phone}</div>
                <div className="table-data">
                  <div
                    className="success"
                    style={{
                      width: "100%" /*
                      borderStyle: "dashed",
                      borderColor: "#008300",
                    */,
                    }}
                    onClick={() => {
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/statutSeance/" + e._id,
                          {
                            method: "post",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ test: true }),
                          }
                        );

                        const content = await rawResponse.json();

                        console.log(content);
                      })();
                      /*
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setseance(ahme);-*/
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/seanceEnAttente",
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
                    }}
                  >
                    Acceptation
                  </div>
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
                          "http://localhost:3500/statutSeance/" + e._id,
                          {
                            method: "post",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ test: false }),
                          }
                        );

                        const content = await rawResponse.json();

                        console.log(content);
                      })();

                      /*
                      const ahme = ahmed.filter(
                        (element) => element.id !== e.id
                      );
                      setseance(ahme);
                      
                      */
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/seanceEnAttente",
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
                    }}
                  >
                    Refus
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
