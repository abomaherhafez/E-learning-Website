import React from "react";
import "../student/CreateaccountStudint.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import { useHistory } from "react-router-dom";
import Testfooter from "../components/Testfooter";

export default function CreateAcoountEnseignant() {
  const history = useHistory();
  const [val, setval] = useState();
  const [name, setName] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
    spécialité: "",
    DateOfBirth: "",
    email: "",
  });
  const handle = () => {
    console.log(name);
    (async () => {
      const rawResponse = await fetch(
        "http://localhost:3500/api/registerEnseignant",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lastName: name.lastname,
            firstName: name.firstname,
            phone: name.phone,
            password: name.password,
            spécialité: name.spécialité,
            DateOfBirth: name.DateOfBirth,
            email: name.email,
          }),
        }
      );

      const content = await rawResponse.json();
      console.log(content);
      if (content._message == "Enseignant validation failed") {
        setval(true);
      } else {
        history.push("/sign-in");
      }
    })();
    /*
    axios
      .post("http://localhost:3500/api/registerEnseignant", {
        lastName: name.lastname,
        firstName: name.firstname,
        phone: name.phone,
        password: name.password,
        spécialité: name.spécialité,
        DateOfBirth: name.DateOfBirth,
        email: name.email,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          history.push("/sign-in");
        }
      })
      .catch((err) => console.log(err));
    console.log(name);*/
  };
  return (
    <div>
      <div>
        <NavBar />
        <div style={{ marginLeft: "15%" }} className="scc">
          <div className="green">
            <div className="rowHfidh">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                  <span className="font-weight-bold">Edogaru</span>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();

                      handle();
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">créer un profil</h4>
                    </div>
                    <div className="rowHfidh mt-2">
                      <div className="col-md-6">
                        <label className="labels">Prénom</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="entrer votre Prénom "
                          onChange={(e) =>
                            setName({ ...name, firstname: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Nom</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="entrer votre Nom"
                          onChange={(e) =>
                            setName({ ...name, lastname: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="col-md-12">
                        <label className="labels">Email </label>
                        <input
                          required
                          type="Email"
                          className="form-control"
                          placeholder="entrer votre Email"
                          onChange={(e) =>
                            setName({ ...name, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Mot de passe</label>
                        <input
                          required
                          type="password"
                          className="form-control"
                          placeholder="entrer votre Mot de passe"
                          onChange={(e) =>
                            setName({ ...name, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">spécialité</label>
                        {/* <input required
                        type="text"
                        className="form-control"
                        placeholder="enter votre spécialité "
                        onChange={(e) =>
                          setName({ ...name, spécialité: e.target.value })
                        }
                       />*/}
                        <div>
                          <select
                            required
                            onChange={(e) => {
                              console.log(name.spécialité);
                              setName({
                                ...name,
                                spécialité: e.target.value,
                              });
                            }}
                          >
                            <option value="mathématiques ">
                              mathématiques{" "}
                            </option>
                            <option value="Physique">Physique</option>
                            <option value="informatique">informatique</option>
                            <option value="sciences">sciences</option>
                            <option value="Langue">Langue</option>
                            <option value="chimie">chimie</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label className="labels">Date de naissance</label>
                        <input
                          required
                          type="Date"
                          className="form-control"
                          placeholder="entrer votre Date de naissance"
                          onChange={(e) =>
                            setName({ ...name, DateOfBirth: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Numéro de télèphone</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="entrer votre Numéro de télèphone "
                          onChange={(e) =>
                            setName({ ...name, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    {val == true ? (
                      <p style={{ textAlign: "center" }}>
                        Vérifiez les champs à remplir
                      </p>
                    ) : (
                      <></>
                    )}
                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                      >
                        Enregistrer le profil
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testfooter />
    </div>
  );
}
