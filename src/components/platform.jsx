import React from "react";
import Block from "./block";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    className: `puzzle piece${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(3),
      platformOnDragEnd: props.onDragEnd
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    console.log("Drag end in platform");
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render() {
    return (
      <div>
        <h1>Jigsaw</h1>
        <h2>Number of moves</h2>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Block items={this.state.items} />
        </DragDropContext>
      </div>
    );
  }
}

export default Platform;
