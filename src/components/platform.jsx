import React from "react";
import Block from "./block";

class Platform extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Jigsaw</h1>
        <h2>Number of moves</h2>
        <Block />
      </div>
    );
  }
}

export default Platform;
