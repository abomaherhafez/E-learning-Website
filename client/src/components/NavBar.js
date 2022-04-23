import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  useEffect(() => {
    setnavprop(localStorage.getItem("type-inscription"));
  });
  const [click, setClick] = useState(false);
  const [navprop, setnavprop] = useState(
    localStorage.getItem("type-inscription")
  );
  const handleClick = () => setClick(!click);
  return (
    <div className="trki7-eli-ta7to">
      <div className="fix">
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <NavLink to="/" className="nav-logo">
                E-learaning
              </NavLink>

              {(() => {
                if (navprop === "et") {
                  return (
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                        <NavLink
                          to="/Home"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/Account-etudent-settings"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Profil
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/sign-in"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                          onMouseUp={() => {
                            localStorage.setItem("type-inscription", "hhhh");
                          }}
                        >
                          log out
                        </NavLink>
                      </li>
                    </ul>
                  );
                } else if (navprop == "ens") {
                  return (
                    <>
                      <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                          <NavLink
                            to="/Home"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            Home
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            to="/Account-etudent-settings"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            Profil
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            to="/sign-in"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            onMouseUp={() => {
                              localStorage.setItem("type-inscription", "hhhh");
                            }}
                          >
                            log out
                          </NavLink>
                        </li>
                      </ul>
                    </>
                  );
                } else if (navprop === "hhhh") {
                  return (
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                        <NavLink
                          to="/Home"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Home
                        </NavLink>
                      </li>{" "}
                      <li className="nav-item">
                        <NavLink
                          to="/about"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/contact"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/sign-in"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Sign-in
                        </NavLink>
                      </li>
                    </ul>
                  );
                } else {
                  return (
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                        <NavLink
                          to="/Home"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Home
                        </NavLink>
                      </li>{" "}
                      <li className="nav-item">
                        <NavLink
                          to="/about"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/contact"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/sign-in"
                          activeClassName="active"
                          className="nav-links"
                          onClick={handleClick}
                        >
                          Sign-in
                        </NavLink>
                      </li>
                    </ul>
                  );
                }
              })()}

              <div className="nav-icon" onClick={handleClick}>
                <AiOutlineMenu />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
