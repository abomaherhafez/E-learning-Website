import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./acouttest.css";
export default function AccountTestSEttings() {
  const [name, setName] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
    spécialité: "",
    DateOfBirth: "",
    email: "",
  });
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="cardtest h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name">Yuki Hayashi</h5>
                    <h6 className="user-email">yuki@Maxwell.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="cardtest h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>nom</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, lastname: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Entrez votre nom "
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Prenom</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, firstname: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        placeholder="Entrez votre prenom "
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, email: e.target.value })
                        }
                        type="Email"
                        className="form-control"
                        placeholder="Entrez votre Email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>mot de pass</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, password: e.target.value })
                        }
                        type="password"
                        className="form-control"
                        placeholder=" Entrez votre mot de pass"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Numero de telephone</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, phone: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Entrez votre numero de telephone"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>spécialité</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, spécialité: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        placeholder="Entrez votre spécialité "
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>date de naissance</label>
                      <input
                        onChange={(e) =>
                          setName({ ...name, DateOfBirth: e.target.value })
                        }
                        type="Date"
                        className="form-control"
                        id="Street"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <button
                      style={{ margin: "20px", marginLeft: "30%" }}
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        console.log(name);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
