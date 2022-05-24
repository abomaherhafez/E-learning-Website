import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";
import Testfooter from "../Testfooter";
import "./ContactUs.css";
export default function Contact() {
  return (
    <div>
      <NavBar />
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
      </div>
      <Testfooter />
    </div>
  );
}
