import React from "react";
import ReactDOM from "react-dom";

// 순수 자바스크립트로 화면 구성
class Hello extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(Hello, {toWhat: "World"}, null),
  document.getElementById("root")
);
