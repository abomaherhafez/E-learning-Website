import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

export default function Card1() {
  const div = "/ee";
  return (
    <div className="cont-tarki77">
      <div className="bbb">
        <section>
          <img
            src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
            className="imagee"
          />
          <h1>Card title</h1>
          <p className="text-textt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </section>
      </div>
      <button className="buttoncard1">
        <Link className="linktolink" to={div}>
          for more info
        </Link>
      </button>
    </div>
  );
}
