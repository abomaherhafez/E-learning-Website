import React from "react";
import "../components/cards/Card1.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Cardseance(props) {
  const [element, setelement] = useState({});
  useEffect(() => {
    {
      (async () => {
        const rawResponse = await fetch(
          "http://localhost:3500/seance/" + props.element.sId,
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
        setelement(content);
      })();
    }
  }, [true]);
  const history = useHistory();
  const div = "/ee";
  return (


    <article className="card">

      <picture className="thumbnail">
        <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
        />
      </picture>
      <div className="card-content">
        <h2> {element.title}</h2>
        <p className='cardparagrphe'>{element.description}</p>
      </div>
      <button style={{
        width: "50%"
        , margin: "auto"
      }}
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", element._id);
          history.push("./cc");
        }}
      >
        pour plus d'infos
      </button>
    </article>

  )
}
