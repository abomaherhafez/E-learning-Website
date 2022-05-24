import React from "react";
import "./tesr.css";
import { Link } from "react-router-dom";

export default function TESTT(props) {
    return (

        <div className="card">
            <div className="card-image">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="London trip"
                />
            </div>
            <div className="card-body">
                <span className="date">{props.e.date}</span>
                <h2>{props.e.title}</h2>
                <p>
                    {props.e.lienZoom}
                </p>
                <div style={{

                    margin: "auto", height: "35px"
                }}
                    className="buttoncard1"
                    onClick={() => {
                        localStorage.setItem("idseance", props.e._id);
                    }}
                >
                    <Link className="linktolink" to="/ee">
                        <p style={{ color: "white" }}>pour plus d'infos</p>
                    </Link>
                </div>
            </div>

            <div className="card-footer">
                <div className="infoinfoinfoinfo">
                    <div className="type">heure de Debut</div>
                    <div className="value">{props.e.heureDebut}</div>

                </div>
                <div className="infoinfoinfoinfo">

                    <div className="type">heure de fin</div>
                    <div className="value">{props.e.heureFin}</div>
                </div>
                <div className="infoinfoinfoinfo">
                    <div className="type">condition :</div>
                    <div className="value"> {props.e.statu} </div>

                </div>
            </div>
        </div >

    );
}
