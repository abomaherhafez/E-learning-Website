import React from "react";
import { useState } from "react";
import SeqnceqfichheCard from "../../Cards/SeqnceqfichheCard";
import "./tableseanczes.css";
export default function TableSeancedejaExist() {
  const [affiche, setaffiche] = useState();
  const [seance, setseance] = useState([
    {
      id: "1",
      title: "tile",
      date: "5/20/2014",
      duree: "3h",
      heureDebut: "11am",
      heureFin: "2pm",
      dec: "this seqnce is qbout evry thing qbout seqnce u zqnt to lern in info skdqlk jqhk  ks sq",

      lienZoom: "http/zoom/gfd/bgfd",
      ownedby: "qgme@gmqil.com",
    },
    {
      id: "2",
      title: "tile",
      date: "5/20/2014",
      duree: "3h",
      heureDebut: "11am",
      heureFin: "2pm",
      dec: "this seqnce is qbout evry thing qbout seqnce u zqnt to lern in info skdqlk jqhk  ks sq",

      lienZoom: "http/zoom/gfd/bgfd",
      ownedby: "qgme@gmqil.com",
    },
    {
      id: "3",
      title: "tile",
      date: "5/20/2014",
      duree: "3h",
      heureDebut: "11am",
      heureFin: "2pm",
      dec: "this seqnce is qbout evry thing qbout seqnce u zqnt to lern in info skdqlk jqhk  ks sq",

      lienZoom: "http/zoom/gfd/bgfd",
      ownedby: "qgme@gmqil.com",
    },
    {
      id: "4",
      title: "tile",
      date: "5/20/2014",
      duree: "3h",
      heureDebut: "11am",
      heureFin: "2pm",
      dec: "this seqnce is qbout evry thing qbout seqnce u zqnt to lern in info skdqlk jqhk  ks sq",

      lienZoom: "http/zoom/gfd/bgfd",
      ownedby: "qgme@gmqil.com",
    },
  ]);
  const style = { marginLeft: "15px" };

  const ahmed = seance;
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr className="trforthed">
              <th className="thtrTheadforpadding"> title</th>
              <th>date</th>
              <th>duree</th>
              <th>heure de Debut</th>
              <th>heure de Fin</th>
              <th>lienZoom</th>
              <th>owned by</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {ahmed.map((e) => (
              <tr>
                <td className="tdtrTbodypadding">{e.title}</td>
                <td className="tdtrTbodypadding">{e.date}</td>
                <td className="tdtrTbodypadding">{e.duree}</td>
                <td className="tdtrTbodypadding">{e.heureDebut}</td>
                <td className="tdtrTbodypadding">{e.heureFin}</td>

                <td className="tdtrTbodypadding">{e.lienZoom}</td>
                <td className="tdtrTbodypadding">{e.ownedby}</td>
                <td className="tdtrTbodypadding">
                  <button
                    style={style}
                    onClick={() => {
                      setaffiche(e);
                    }}
                  >
                    Afficher la séance
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {affiche != undefined ? (
        <div
          style={{
            width: "50%",
            height: "20%",
            marginLeft: "110px",
            marginTop: "50px",
          }}
        >
          {" "}
          <SeqnceqfichheCard affiche={affiche} />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
