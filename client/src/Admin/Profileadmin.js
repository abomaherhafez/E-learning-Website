import React from "react";
import Sidebarvol from "./Sidebarvol";
import "./profileadmin.css";

export default function Profileadmin() {
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
      </div>
      <div className="login-form">
        <form>
          <h1>update profile</h1>
          <div className="content">
            <div className="input-field">
              <input type="email" placeholder="nouveau Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="nouveau mot de passe" />
            </div>
            <button className="butt">update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
