import React from "react";
import CardUpdateProfileEnseingnant from "../components/cards/CardUpdateProfileEnseingnant";
import "./Accountsettings.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";

export default function Accountsettings() {
  const [name, setName] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
    spécialité: "ibn ",
    DateOfBirth: "",
    email: "",
  });
  const handleclick = () => {
    console.log(name);
  };
  return (
    <div>
      <NavBar />

      <div className="classHome">
        <div>
          <CardUpdateProfileEnseingnant />
        </div>
        <div className="elKbira-BlKol">
          <div>
            <img
              className="imagee"
              src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
            ></img>
          </div>
          <div>
            <label>lastname:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => setName({ ...name, lastname: e.target.value })}
            ></input>
          </div>
          <div>
            <label>firstname:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => setName({ ...name, firstname: e.target.value })}
            ></input>
          </div>
          <div>
            <label>date of birth:</label>
            <br />
            <input
              className="tarki7Input"
              type="date"
              onChange={(e) =>
                setName({ ...name, DateOfBirth: e.target.value })
              }
            />
          </div>
          <div>
            <label>numéro de téléphone:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => setName({ ...name, phone: e.target.value })}
            ></input>
          </div>

          <div>
            <label>spécialité:</label>
            <br />
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => setName({ ...name, spécialité: e.target.value })}
            ></input>
          </div>
          <div>
            <label>email:</label>
            <br></br>
            <input
              className="tarki7Input"
              type="text"
              onChange={(e) => setName({ ...name, email: e.target.value })}
            ></input>
          </div>
        </div>
      </div>
      <div className="divbutt">
        <button className="butt" onClick={handleclick}>
          <span className="text">update</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
