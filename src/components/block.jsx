import React from "react";
import "../styles/block.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 30;

const getListStyle = isDraggingOver => ({
  //background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 89
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

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
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <span
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
          </span>
        )}
      </Droppable>
      //   <div className="container">
      //     <div className="puzzle piece0"></div>
      //     <div className="puzzle piece4"></div>
      //     <div className="puzzle piece8"></div>
      //   </div>
    );
  }
}
