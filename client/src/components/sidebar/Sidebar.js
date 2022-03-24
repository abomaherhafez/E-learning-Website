import React from "react";
import "./Sidebar.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import { Link } from "react-router-dom";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
export default function Sidebar() {
  return (
    <div className="navMenu">
      <Link className="nodecoration" to="/ss">
        <div className="cenerthisiconqndtext">
          <AccountBoxIcon fontSize="large" className="center-icon" />
          <p className="nodecoration">account settings</p>
        </div>
      </Link>
      <Link className="nodecoration" to="/CreateSeance">
        <div className="cenerthisiconqndtext">
          <CreateNewFolderRoundedIcon
            fontSize="large"
            className="center-icon"
          />
          <p className="nodecoration">cree seance</p>
        </div>
      </Link>
      <Link className="nodecoration" to="/CreateSeance">
        <div className="cenerthisiconqndtext">
          <DeleteForeverRoundedIcon fontSize="large" className="center-icon" />
          <p className="nodecoration">Delete account</p>
        </div>
      </Link>

      <div class="dot"></div>
    </div>
  );
}
