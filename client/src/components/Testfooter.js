import React from "react";
import "./testfootrdd.css";
import { useHistory } from "react-router-dom";

export default function Testfooter() {
  const history = useHistory();

  return (
    <div>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about"> </p>
          <h2>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  flexGrow: "1",
                  color: "#f5b921",
                  alignItems: "center",
                  fontFamily: "Georgia, serif",
                }}
              >
                E-learning
              </div>
            </div>
          </h2>
          <p className="menu">
            <a
              className="ahoverdecrition"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "3px",
                marginLeft: "3px",
              }}
              onClick={() => {
                history.push("/");
              }}
            >
              Accueil
            </a>{" "}
            |
            <a
              onClick={() => {
                history.push("/about");
              }}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "3px",
                marginLeft: "3px",
              }}
              className="ahoverdecrition"
            >
              Qui sommes-nous
            </a>
            |
            <a
              onClick={() => {
                history.push("/contact");
              }}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "3px",
                marginLeft: "3px",
              }}
              className="ahoverdecrition"
            >
              Contactez-nous
            </a>
          </p>

          <div className="icons">
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/?lang=en"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.google.com/"
            >
              <i className="fa fa-google-plus"></i>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span style={{ color: "white" }}>
                Nom et numéro de la rue ,Ville, Pays{" "}
              </span>
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p style={{ color: "white" }}> (+216) 71 71 71 71</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                E-learning.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                flexGrow: "1",
                color: "#f5b921",
                alignItems: "center",
              }}
            >
              si tu veux :
            </p>
            <p className="menu">
              <span
                style={{ fontSize: "20px" }}
                onClick={() => {
                  history.push("/Create-account-Enseignant");
                }}
              >
                {" "}
                enseignant crée un compte{" "}
              </span>
            </p>
            <p className="menu">
              <span
                style={{ fontSize: "20px" }}
                onClick={() => {
                  history.push("/Create-account");
                }}
              >
                étudiant créer un compte{" "}
              </span>
            </p>
            <p className="menu">
              <span
                style={{ fontSize: "20px" }}
                onClick={() => {
                  history.push("/sign-in");
                }}
              >
                {" "}
                se connecter{" "}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
