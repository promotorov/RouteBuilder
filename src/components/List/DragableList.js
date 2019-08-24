import React, { useState } from 'react';
import { Button } from "reactstrap";

let draggedItem = {
  index: undefined,
  data: undefined
}
let items;

function onDragStart(e, index) {
  draggedItem.index = index;
  draggedItem.data = items[index];
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", e.target.parentNode);
  e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
}

function onDragOver(index) {
  if (draggedItem.index === index)
    return;

  let newItems = this.data.filter((item, index) => index !== draggedItem.index);
  newItems.splice(index, 0, draggedItem.data);
  items = [...newItems];

}

function DragableList({data, onDelete, onUpdate}) {
  items = data;
  return (
    <ul>
      {
        data.map((item, index) => (
          <li key={index} onDragOver={() => onDragOver.call({data}, index)}>
            <div
              draggable
              onDragStart={e => onDragStart(e, index)}
              onDragEnd={() => onUpdate(items)}
            >
              {item}
            </div>
            <Button color="primary" onClick={() => onDelete(index)}>Close</Button>
          </li>
        ))
      }
    </ul>
  );
}

export default DragableList;