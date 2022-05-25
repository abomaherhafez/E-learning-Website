import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";
import Testfooter from "../Testfooter";
import "./ContactUs.css";
export default function Contact() {
  return (
    <div>
      <NavBar />

      <div className="cardhkgs">
        <div className="cardhkg">
          <div className="cardhkg-header bg1">
            <p className="pforcontactus">visitez-nous</p>
          </div>
          <div className="cardhkg-content">
            <h2 className="cardhkg-title">LOCATION</h2>
            <p className="cardhkg-text">

              Nom et numéro de la rue ,Ville, Pays
            </p>
          </div>
        </div>

        <div className="cardhkg">
          <div className="cardhkg-header bg2">
            <p className="pforcontactus">contactez-nous par mail</p>
          </div>
          <div className="cardhkg-content">
            <h2 className="cardhkg-title">Adresse mail</h2>
            <p className="cardhkg-text">
              E-learning@elearning.com
            </p>
          </div>
        </div>

        <div className="cardhkg">
          <div className="cardhkg-header bg3">
            <p className="pforcontactus">contactez-nous par téléphone</p>
          </div>
          <div className="cardhkg-content">
            <h2 className="cardhkg-title">le numéro de téléphone</h2>
            <p className="cardhkg-text">71 71 71 71</p>
          </div>
        </div>
      </div>
      <Testfooter />
    </div>
  );
}
/*
<div className="contact-clean">
  <form onSubmit="return false;">
    <h2 className="text-center">Contact us</h2>
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="Name"
      />
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="Email"
      />
    </div>
    <div className="form-group">
      <textarea
        className="form-control"
        name="message"
        placeholder="Message"
        rows="14"
      ></textarea>
    </div>
    <div className="form-group">
      <button className="btn btn-primary" type="submit">
        send
      </button>
    </div>
  </form>
</div>*/
