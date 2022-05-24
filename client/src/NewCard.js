import React from 'react'
import "./Newcard.css"
import { useHistory } from "react-router-dom";

export default function NewCard(props) {
  const history = useHistory();

  return (


    <article className="card">

      <picture className="thumbnail">
        <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
        />
      </picture>
      <div className="card-content">
        <h2> {props.element.title}</h2>
        <p className='cardparagrphe'>{props.element.description}</p>
      </div>
      <button style={{
        width: "50%"
        , margin: "auto"
      }}
        className="buttoncard1"
        onClick={() => {
          localStorage.setItem("idseance", props.element._id);
          history.push("./ee");
        }}
      >
        pour plus d'infos
      </button>
    </article>

  )
}
