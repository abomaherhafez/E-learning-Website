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
            src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
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
        pour plus d'infos
      </button>
    </div>
  );
}
