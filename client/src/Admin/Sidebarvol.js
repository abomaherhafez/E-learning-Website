import React from "react";
import "./sidebarvol.css";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
export default function Sidebarvol() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/admin">
            <i className="fa fa-home fa-2x"></i>
            <span className="nav-text">Dashboard</span>
          </Link>
        </li>
        <li className="limuiicon has-subnav">
          <Link className="iconsidebar" to="/profile admin">
            <AccountBoxIcon className="fa  fa-2x marginRightForText" />

            <span className="nav-text">Profile</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link className="iconsidebar" to="/users">
            <PeopleIcon className="fa  fa-2x marginRightForText" />
            <span className="nav-text">utilisateurs</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link className="iconsidebar" to="/seances">
            <GroupsIcon className="fa  fa-2x marginRightForText" />
            <span className="nav-text">seances</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link className="iconsidebar" to="/seancesDejaaccpe">
            <SchoolIcon className="fa  fa-2x marginRightForText" />
            <span className="nav-text">séances déjà accepté</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link className="iconsidebar" to="/enseignant">
            <SchoolIcon className="fa  fa-2x marginRightForText" />
            <span className="nav-text">enseignant</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link className="iconsidebar" to="/studnts">
            <PersonIcon className="fa  fa-2x marginRightForText" />
            <span className="nav-text">étudiants</span>
          </Link>
        </li>
      </ul>
      <ul className="logout">
        <li
          onClick={() => {
            localStorage.setItem("type-inscription", "");
          }}
        >
          <Link to="/sign-in">
            <i className="fa fa-power-off fa-2x"></i>
            <span className="nav-text">déconexion</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
