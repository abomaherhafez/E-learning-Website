import React from "react";
import Sidebarvol from "./Sidebarvol";
import Cardadmin1 from "../Admin/Cards/Cardadmin1";
import "./Dashboraed.css";
import Cardadmin2 from "../Admin/Cards/Cardadmin2";
import Cardadmin3 from "../Admin/Cards/Cardadmin3";
import Cardadmin4 from "../Admin/Cards/Cardadmin4";
import TableAdmin from "./Table/TableAdmin";
export default function Dashboard() {
  return (
    <div>
      <div className="sidebarespace">
        <Sidebarvol />
        <div className="cardqdmindqsh">
          <Cardadmin1 />
          <Cardadmin2 />
          <Cardadmin3 />
          <Cardadmin4 />
        </div>
      </div>
      <div className="tableeladmin">
        <TableAdmin />
      </div>
    </div>
  );
}
