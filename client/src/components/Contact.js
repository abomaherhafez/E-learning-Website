import React from "react";
import "./ContactUs.css";
export default function Contact() {
  return (
    <div>
      <div class="contact-clean">
        <form onsubmit="return false;">
          <h2 class="text-center">Contact us</h2>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              placeholder="Message"
              rows="14"
            ></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
