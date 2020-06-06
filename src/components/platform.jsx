import React from "react";
import Block from "./block";
import { DragDropContext } from "react-beautiful-dnd";

const getItems = (count, num) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${num * 10 + k}`,
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
      items: getItems(3, 1),
      items2: getItems(3, 2),
      platformOnDragEnd: props.onDragEnd
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId == result.source.droppableId) {
      const items = reorder(
        this.state.items,
        result.source.index,
        result.destination.index
      );
      this.setState({
        items
      });

      const items2 = reorder(
        this.state.items2,
        result.source.index,
        result.destination.index
      );
      this.setState({
        items2
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Jigsaw</h1>
        <h2>Number of moves</h2>

        <DragDropContext onDragEnd={this.onDragEnd} className="container">
          <Block items={this.state.items} blockId={"1"} />
          <Block items={this.state.items2} blockId={"2"} />
        </DragDropContext>
      </div>
    );
  }
}

export default Platform;
