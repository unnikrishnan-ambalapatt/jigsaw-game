import React from "react";
import Block from "./block";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

class Platform extends React.Component {
  state = {};

  onDragEnd(result) {
    console.log("Drag end in platform");
  }

  render() {
    return (
      <div>
        <h1>Jigsaw</h1>
        <h2>Number of moves</h2>

        <DragDropContext>
          <Block />
        </DragDropContext>
      </div>
    );
  }
}

export default Platform;
