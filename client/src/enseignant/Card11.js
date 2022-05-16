import React from "react";
import "../components/cards/Card1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card11(props) {
  const [seance, setseance] = useState({});
  const div = "/ee";
  return (
    <div className="cont-tarki77">
      <div className="bbb">
        <section>
          <img
            src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
            className="imagee"
          />
          <h1 className="h1card1">{props.e.title}</h1>
          <p>{props.e.date}</p>
          <p className="text-textt">{props.e.description}</p>
        </section>
      </div>
      <button
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", props.e._id);
        }}
      >
        <Link className="linktolink" to={div}>
          for more info
        </Link>
      </button>
    </div>
  );
}
