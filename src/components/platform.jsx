import React from "react";
import Block from "./block";
import { DragDropContext } from "react-beautiful-dnd";

const getItemsArray = arrayCount => {
  let arr = new Array();
  for (let i = 1; i <= arrayCount; i++) {
    arr[i] = getItems(3, i);
  }
  return arr;
};

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
      items: getItemsArray(2),
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
      const items = this.state.items;
      const item = reorder(
        this.state.items[result.source.droppableId],
        result.source.index,
        result.destination.index
      );
      items[result.source.droppableId] = item;
      this.setState({
        items
      });
    } else {
      const items = this.state.items;
      const itemFrom = reorder(
        this.state.items[result.source.droppableId],
        result.source.index,
        result.destination.index
      );
      const itemTo = reorder(
        this.state.items[result.destination.droppableId],
        result.destination.index,
        result.source.index
      );
      items[result.destination.droppableId] = itemFrom;
      items[result.source.droppableId] = itemTo;
      this.setState({
        items
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Jigsaw</h1>
        <h2>Number of moves</h2>

        <DragDropContext onDragEnd={this.onDragEnd} className="container">
          <Block items={this.state.items[1]} blockId={"1"} />
          <Block items={this.state.items[2]} blockId={"2"} />
        </DragDropContext>
      </div>
    );
  }
}

export default Platform;
