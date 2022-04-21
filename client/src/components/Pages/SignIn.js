import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../footer/Footer";

export default function SignIn() {
  const [lista, setlista] = useState({
    Email: "",
    pass: "",
  });
  const [login, setlogin] = useState({});
  const submithandelr = (event) => {
    event.preventDefault();
    console.log(lista);
  };
  const handlelogin = async () => {
    await axios
      .get("http://localhost:4000/auth/protected", {
        Email: lista.Email,
        password: lista.pass,
      })
      .then((res) => {
        setlogin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login-form">
        <NavBar />
        <form
          onSubmit={(event) => {
            submithandelr(event);
          }}
        >
          <h1>Login</h1>
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
          <div className="action">
            <button>
              <Link to="/Create-account" className="buttont">
                Register étudiant
              </Link>
            </button>
            <button className="button">
              <Link to="/Create-account-Enseignant" className="buttont">
                Register enseignant
              </Link>
            </button>
            <button type="submit" onClick={handlelogin}>
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
