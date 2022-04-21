import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div class="login-form">
      <form>
        <h1>Login</h1>
        <div class="content">
          <div class="input-field">
            <input type="email" placeholder="Email" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Password"
              autocomplete="new-password"
            />
          </div>
          <a href="#" class="link">
            Forgot Your Password?
          </a>
        </div>
        <div class="action">
          <button>
            <Link to="/Create-account">Register</Link>
          </button>
          <button> Sign in</button>
        </div>
      </form>
    </div>
  );
}
