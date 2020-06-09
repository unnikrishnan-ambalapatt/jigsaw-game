import React from "react";
import "../styles/block.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 30;

const getListStyle = isDraggingOver => ({
  //background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  flexWrap: "wrap"
  // padding: grid
  // width: 100
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // margin: `0 0 ${grid}px 0`,
  display: "flex",
  flexWrap: "wrap",

  // change background colour if dragging
  //background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

export default class Block extends React.Component {
  onDragEnd(result) {
    console.log("Drag end in block");
    // dropped outside the list
    if (!result.destination) {
      return;
    }
  }

  render() {
    return (
      <div>
        <Droppable droppableId={this.props.blockId} direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={item.className}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    ></div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
