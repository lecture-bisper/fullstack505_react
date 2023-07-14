import React from "react";

function SideMenuItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">{props.status}</a>
    </li>
  )
}

export default SideMenuItem;
