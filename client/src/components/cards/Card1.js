import React from "react";
import "./Card1.css";
import { useHistory } from "react-router-dom";

export default function Card1(props) {
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
          <h1 className="h1card1"> {props.element.title}</h1>
          <p className="text-textt">{props.element.date}</p>
          <p className="text-textt">{props.element.description}</p>
        </section>
      </div>
      <button
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", props.element._id);
          history.push("./ee");
        }}
      >
        for more info
      </button>
    </div>
  );
}
