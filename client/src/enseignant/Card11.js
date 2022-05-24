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
            src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
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
          pour plus d'infos
        </Link>
      </button>
    </div>
  );
}
