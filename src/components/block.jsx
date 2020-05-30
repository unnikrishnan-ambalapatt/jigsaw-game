import React from "react";
import logo from "../img/nums.png";
import "../styles/block.css";

export default class Block extends React.Component {
  render() {
    return (
      <div class="container">
        <img alt="logo" src={logo} className="position-zero"></img>
        <img alt="logo" src={logo} className="position-one"></img>
        <img alt="logo" src={logo} className="position-two"></img>
        <img alt="logo" src={logo} className="position-three"></img>
        <img alt="logo" src={logo} className="position-four"></img>
        <img alt="logo" src={logo} className="position-five"></img>
        <img alt="logo" src={logo} className="position-six"></img>
        <img alt="logo" src={logo} className="position-seven"></img>
        <img alt="logo" src={logo} className="position-eight"></img>
        <img alt="logo" src={logo} className="position-nine"></img>
      </div>
    );
  }
}
