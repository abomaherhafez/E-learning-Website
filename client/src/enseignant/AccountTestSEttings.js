import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import "./acouttest.css";
import { useHistory } from "react-router-dom";
import Testfooter from "../components/Testfooter";
export default function AccountTestSEttings() {
  const [profile, setprofile] = useState(false);
  const id = localStorage.getItem("id");
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/enseignant/" + id,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      const content = await rawResponse.json();
      setnom(content);
    })();
  }, []);

  const [name, setName] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    spécialité: "",
    DateOfBirth: "",
    email: "",
  });
  const [nom, setnom] = useState("hi");
  console.log(nom);
  return (
    <div>
      <NavBar />{" "}
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
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">
                        {nom.lastName} {nom.firstName}{" "}
                      </h5>
                      <h6 className="user-name">{nom.email}</h6>
                      <h6 className="user-name">{nom.spécialité}</h6>
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
                          Mise à jour{" "}
                        </button>
                        <button
                          className="dangerrr"
                          onClick={() => {
                            console.log(id);
                            localStorage.setItem("type-inscription", "");

                            (async () => {
                              const rawResponse = await fetch(
                                "http://localhost:3500/enseignantdelete/" + id,
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
                        {nom.lastName} {nom.firstName}{" "}
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
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 " style={{ fontSize: "26px" }}>
                        à propos de moi
                      </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>nom</label>
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Numero de telephone</label>
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
                        <label>spécialité</label>
                        <input
                          required
                          onChange={(e) =>
                            setName({ ...name, spécialité: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Entrez votre spécialité "
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>date de naissance</label>
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

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <button
                        style={{ margin: "20px", width: "100%" }}
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                        onClick={() => {
                          console.log(name);
                          console.log(id);
                          (async () => {
                            const rawResponse = await fetch(
                              "http://localhost:3500/modifierEnseignant/" + id,
                              {
                                method: "POST",
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
                        Mise à jour
                      </button>
                    </div>
                  </div>
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
