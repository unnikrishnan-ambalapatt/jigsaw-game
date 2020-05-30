import React from "react";
import logo from "../logo.svg";
import "../styles/block.css";

export default class Block extends React.Component {
  render() {
    return <img alt="logo" src={logo} className="image-resize"></img>;
  }
}
