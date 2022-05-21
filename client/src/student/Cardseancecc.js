import React from "react";
import "../components/cards/Card1.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Cardseancecc(props) {
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
    <div className="cont-tarki77">
      <div className="bbb">
        <section>
          <img
            src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
            className="imagee"
          />
          <h1 className="h1card1"> {element.title}</h1>
          <p className="text-textt">{element.date}</p>
          <p className="text-textt">{element.description}</p>
        </section>
      </div>
      <button
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", props.element.sId);
          history.push("./qq");
        }}
      >
        for more info
      </button>
    </div>
  );
}
