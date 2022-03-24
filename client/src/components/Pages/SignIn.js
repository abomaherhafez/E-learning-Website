import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [lista, setlista] = useState([
    { Email: "mohammad@lll.com", pass: "123456" },
  ]);
  const handle = () => console.log(lista);
  const submithandelr = (event) => {
    event.preventDefault();
    console.log(lista);
    /* axios
      .post("https://ellien el bdi yah", lista)
      .then((response) => {
        Console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });*/
  };

  return (
    <div className="login-form">
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
          <a href="#" className="link">
            Forgot Your Password?
          </a>
        </div>
        <div className="action">
          <button>
            <Link to="/Create-account">Register étudiant </Link>
          </button>
          <button>
            <Link to="/Create-account-Enseignant">Register enseignant </Link>
          </button>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
