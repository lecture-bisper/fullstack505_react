import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {

  return (
    <header className={'container-fluid'}>
      <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
        <div className={"container-fluid"}>
          <ul className={"navbar-nav"}>
            <li className={"nav-item"}>
              <Link className={"nav-link"} to={"#"}>Link1</Link>
            </li>
            <li className={"nav-item"}>
              <Link className={"nav-link"} to={"#"}>Link2</Link>
            </li>
            <li className={"nav-item"}>
              <Link className={"nav-link"} to={"#"}>Link3</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
