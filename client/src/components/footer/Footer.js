import React from "react";
import "./Footer.css";

const Footer = () => {
  let d = new Date();
  let n = d.getFullYear();
  return (
    <div className="footer">
      <div className="main_footer">
        <div className="get_in_contact">
          <h1>Get in Contact</h1>
          <ul>
            <li className="lined">ABOUT US</li>
            <li className="lined">CONTACT US</li>
          </ul>
        </div>

        <div className="socialmedia_links">
          <h1>Follow Us</h1>
          <div>
            <img
              src="https://i.imgur.com/pfcIVI9.png"
              alt="facebook"
              className="social_icons"
            />
            <img
              src="https://i.imgur.com/CBAfZK8.png"
              alt="instagram"
              className="social_icons"
            />
            <img
              src="https://i.imgur.com/zBvGrB2.png"
              alt="twitter"
              className="social_icons"
            />
          </div>
        </div>
      </div>
      <div className="logo_copyright">
        <div className="nav-logo">
          CodeBucks
          <i className="fas fa-code"></i>
        </div>
        <div className="copyright"></div>
      </div>
    </div>
  );
};

export default Footer;
