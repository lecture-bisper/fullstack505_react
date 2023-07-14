import React from "react";
import SideMenuItem from "./SideMenuItem";

function SideMenu(props) {
  return (
    <ul className="nav nav-pills flex-column">
      <SideMenuItem status={"Active"} />
      <SideMenuItem status={"Link"} />
      <SideMenuItem status={"Link"} />
      <SideMenuItem status={"Disabled"} />
    </ul>
  )
}

export default SideMenu;
