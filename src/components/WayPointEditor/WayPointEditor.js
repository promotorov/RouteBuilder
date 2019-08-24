import React, { useState } from 'react';
import { InputGroup, Input } from 'reactstrap';
import DragableList from '../List/DragableList';

function handleKeyPress(event) {
  // Enter
  if (event.charCode === 13) {
    this.setPoints([...this.points, event.target.value])
    event.target.value = ""
  }
}

function handleItemDeleteClick(index) {
  const copiedArray = [...this.points]
  copiedArray.splice(index, 1);
  this.setPoints(copiedArray);
}

function updatePoints(points) {
  this.setPoints(points);
}


function WayPointEditor() {

  const [points, setPoints] = useState([]);

  return (
    <div>
      <InputGroup>
        <Input placeholder="Новая точка маршрута" onKeyPress={event => handleKeyPress.call({points, setPoints}, event)}/>
      </InputGroup>
      <DragableList
        data={points}
        onDelete={handleItemDeleteClick.bind({points, setPoints})}
        onUpdate={updatePoints.bind({setPoints})}
      />
    </div>
  );
}

export default WayPointEditor;
