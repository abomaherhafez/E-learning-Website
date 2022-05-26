import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "../enseignant/acouttest.css";
import { useHistory } from "react-router-dom";
import Testfooter from "../components/Testfooter";

export default function StudentAccountsetttings() {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3500/etudiant/" + id, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const content = await rawResponse.json();
      setnom(content);
    })();
  }, []);

  const [profile, setprofile] = useState(false);
  const id = localStorage.getItem("id");
  const [nom, setnom] = useState("hii");
  const [name, setName] = useState({
    _id: localStorage.getItem("id"),
    lastName: "",
    firstName: "",
    phone: "",
    // password: "",
    niveau: "",
    DateOfBirth: "",
    email: "",
  });
  return (
    <div>
      <NavBar />
      {profile === false ? (
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="cardtest h-100">
                <div
                  className="card-body"
                  style={{
                    width: "150%",
                    boxShadow: " 0 3px 10px rgb(0 0 0 / 20%)",
                  }}
                >
                  <div className="account-settings">
                    <div
                      className="user-profile"
                      style={{
                        display: "flex",
                        marginRight: "50px",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        alignContent: "stretch",
                        justifyContent: "center",
                        alignCtems: "center",
                      }}
                    >
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">
                        {nom.lastname} {nom.firstname}{" "}
                      </h5>
                      <h6 className="user-name">{nom.email}</h6>
                      <h6 className="user-name">{nom.niveau}</h6>
                      <h6 className="user-name">{nom.phone}</h6>
                      <h6 className="user-name">{nom.DateOfBirth}</h6>
                      <div
                        style={{
                          display: "flex",
                          alignContent: " space-around",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: " stretch",
                        }}
                      >
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          onClick={() => {
                            setprofile(true);
                          }}
                        >
                          Mise à jour
                        </button>
                        <button
                          onClick={() => {
                            localStorage.setItem("type-inscription", "");
                            console.log(id);
                            (async () => {
                              const rawResponse = await fetch(
                                "http://localhost:3500/etudiantDEl/" + id,
                                {
                                  method: "Delete",
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(),
                                }
                              );

                              const content = await rawResponse.json();
                              console.log(content);
                              if (content.message === "Objet supprimé !") {
                                history.push("/sign-in");
                              }
                            })();
                          }}
                          className="dangerrr"
                        >
                          supprimer compte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
          </div>
        </div>
      ) : (
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
                      <h5 className="user-name">
                        {nom.lastname} {nom.firstname}{" "}
                      </h5>
                      <h6 className="user-name">{nom.email}</h6>
                      <h6 className="user-name">{nom.niveau}</h6>
                      <h6 className="user-name">{nom.phone}</h6>
                      <h6 className="user-name">{nom.DateOfBirth}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="cardtest h-100">
                <div className="card-body">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();

                      console.log(name);
                      (async () => {
                        const rawResponse = await fetch(
                          "http://localhost:3500/modifierEtudiant/" + id,
                          {
                            method: "post",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(name),
                          }
                        );

                        const content = await rawResponse.json();

                        console.log(content);
                      })();
                    }}
                  >
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2" style={{ fontSize: "26px" }}>
                          à propos de moi
                        </h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Nom</label>
                          <input
                            required
                            onChange={(e) =>
                              setName({ ...name, lastName: e.target.value })
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
                            required
                            onChange={(e) =>
                              setName({ ...name, firstName: e.target.value })
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
                            required
                            onChange={(e) =>
                              setName({ ...name, email: e.target.value })
                            }
                            type="Email"
                            className="form-control"
                            placeholder="Entrez votre Email"
                          />
                        </div>
                      </div>
                      {/*
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>mot de pass</label>
                        <input required
                          onChange={(e) =>
                            setName({ ...name, password: e.target.value })
                          }
                          type="password"
                          className="form-control"
                          placeholder=" Entrez votre mot de pass"
                        />
                      </div>
                    </div> */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Numéro de télèphone</label>
                          <input
                            required
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
                          <label>Niveau</label>
                          <div>
                            <select
                              required
                              onChange={(e) => {
                                console.log(name.niveau);
                                setName({
                                  ...name,
                                  niveau: e.target.value,
                                });
                                console.log(name.niveau);
                              }}
                            >
                              <option value="lycée">lycée</option>
                              <option value="Faculté">Faculté</option>
                              <option value="collège">collège</option>
                            </select>
                          </div>
                        </div>
                        {/*  <input required
                          onChange={(e) =>
                            setName({ ...name, niveau: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Entrez votre niveau "
                        />
                      </div>*/}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Date de naissance</label>
                          <input
                            required
                            onChange={(e) =>
                              setName({ ...name, DateOfBirth: e.target.value })
                            }
                            type="Date"
                            className="form-control"
                            id="Street"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button
                          style={{ margin: "20px", marginLeft: "30%" }}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Mise à jour
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Testfooter />
    </div>
  );
}
