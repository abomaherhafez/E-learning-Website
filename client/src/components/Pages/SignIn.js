import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Typesignin } from "../../App";

export default function SignIn() {
  const history = useHistory();
  const [newlogin, setnewlogin] = useState();
  const [signininformation, setsignininformation] = useContext(Typesignin);
  const [problem, setproblem] = useState();
  const [lista, setlista] = useState({
    Email: "",
    pass: "",
  });
  const submithandelr = (event) => {
    event.preventDefault();
  };
  const handle = () => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: lista.Email,
          password: lista.pass,
        }),
      });

      const content = await rawResponse.json();
      console.log(content);
      setnewlogin(content);
      console.log(newlogin);

      if (content.enseignant !== undefined) {
        console.log("enseignant");
        setsignininformation("ens");
        localStorage.setItem("id", content.enseignant._id);
        localStorage.setItem("type-inscription", "ens");
        history.push("/AccountEnseignant");
      } else if (content.etudiant !== undefined) {
        console.log("etudiant");
        setsignininformation("et");
        localStorage.setItem("type-inscription", "et");
        localStorage.setItem("id", content.etudiant._id);
        history.push("/HomeaccountStudent");
      } else if (content.admin !== undefined) {
        console.log("etudiant");
        setsignininformation("admin");
        localStorage.setItem("id", content.admin._id);
        localStorage.setItem("type-inscription", "admin");
        history.push("/admin");
        console.log("admin");
      } else {
        setproblem("invalid mot de passe ou email");
      }
    })();
    /*
    axios
      .post("http://localhost:3500/api/loginEtudiant", {
        email: lista.Email,
        password: lista.pass,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          history.push("/admin");
        }
      })
      .catch((err) => console.log(err));
    console.log(lista);*/
    /*
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/api/loginEtudiant",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: lista.Email,
            password: lista.pass,
          }),
        }
      );

      const content = await rawResponse.json();

      console.log(content);
      if (content.msg === "Invalid login attempt") {
      } else {
        setsignininformation("ens");
        console.log(signininformation);
        localStorage.setItem("type-inscription", "ens");
        history.push("/AccountEnseignant");
      }
    })();
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/api/loginEnseignant",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: lista.Email,
            password: lista.pass,
          }),
        }
      );

      const content = await rawResponse.json();

      console.log(content);
      if (content.msg === "Invalid login attempt") {
      } else {
        setsignininformation("et");
        console.log(signininformation);
        localStorage.setItem("type-inscription", "et");
        history.push("/HomeaccountStudent");
      }
    })();*/
  };
  return (
    <div>
      <div className="login-form">
        <NavBar />
        <form
          onSubmit={(event) => {
            submithandelr(event);
            setsignininformation("hiiiiiiiiiiiiiiiiiii");
            console.log(signininformation);
          }}
        >
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setlista({ ...lista, Email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setlista({ ...lista, pass: e.target.value })}
              />
            </div>
          </div>
          <p style={{ color: "red", textAlign: "center" }}>{problem}</p>
          <div className="action">
            <button
              style={{ borderBottom: "5px solid #cdcfd4" }}
              type="submit"
              onClick={handle}
            >
              Sign in
            </button>
          </div>
          <div className="action">
            <button style={{ borderRight: "5px solid #CDCFD4" }}>
              <Link to="/Create-account" className="buttont">
                Register étudiant
              </Link>
            </button>
            <button className="button">
              <Link to="/Create-account-Enseignant" className="buttont">
                Register enseignant
              </Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
