import React from "react";
import Block from "./block";
import { DragDropContext } from "react-beautiful-dnd";

const getItemsArray = arrayCount => {
  let arr = new Array();
  for (let i = 0; i < arrayCount; i++) {
    arr[i] = getItems(4, i);
  }
  return arr;
};

const getItems = (count, num) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${num}-${num * 10 + k}`,
    className: `puzzle piece${num * 10 + k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

let moveCount = 0;

const moveBetweenGroups = (items, result) => {
  const movingItem = items[result.source.droppableId].splice(
    items[result.source.droppableId].indexOf(
      items[result.source.droppableId][result.source.index]
    ),
    1
  );
  items[result.destination.droppableId].splice(
    result.destination.index,
    0,
    movingItem[0]
  );
};

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItemsArray(2),
      platformOnDragEnd: props.onDragEnd,
      moveCount: moveCount
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    moveCount++;
    if (result.destination.droppableId == result.source.droppableId) {
      const items = this.state.items;
      const item = reorder(
        this.state.items[result.source.droppableId],
        result.source.index,
        result.destination.index
      );
      items[result.source.droppableId] = item;
      this.setState({
        items,
        moveCount
      });
    } else {
      const items = this.state.items;
      moveBetweenGroups(items, result);
      this.setState({
        items,
        moveCount
      });
    }
  }

  render() {
    return (
      <div className="pad">
        <h1>Jigsaw</h1>
        <h2>Number of moves: {this.state.moveCount}</h2>

        <DragDropContext onDragEnd={this.onDragEnd} className="container">
          <Block items={this.state.items[0]} blockId={"0"} />
          <Block items={this.state.items[1]} blockId={"1"} />
        </DragDropContext>
      </div>
    );
  }
}

export default Platform;
