import React, { useState } from 'react';
import { Button } from "reactstrap";
import { dragArrayItem } from '../../common/index';

let draggedItem = {
  index: undefined,
  data: undefined
}
let draggedOverItemIndex;
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

  items = dragArrayItem(this.data, draggedItem.index, index);
  draggedOverItemIndex = index;
}

function DragableList({data, onDelete, onUpdate}) {
  items = data;
  return (
    <ul>
      {
        data.map((item, index) => (
          <li key={index} onDragOver={() => onDragOver.call({data}, index)}>
            <span
              draggable
              onDragStart={e => onDragStart(e, index)}
              onDragEnd={() => onUpdate(items, draggedItem.index, draggedOverItemIndex)}
              style={{'line-height': '30px'}}
            >
              {item}
            </span>
            <Button color="primary" onClick={() => onDelete(index)} style={{float: 'right', padding: 0}}>
              Close
            </Button>
          </li>
        ))
      }
    </ul>
  );
}

export default DragableList;