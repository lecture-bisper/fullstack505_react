import React from "react";
import SideMenu from "./SideMenu";

function Side(props) {
  return (
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div style={props.styles}>Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <SideMenu />
      <hr className="d-sm-none" />
    </div>
  )
}

export default Side;
