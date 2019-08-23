import React, { useState } from 'react';
import { InputGroup, Input } from 'reactstrap';
import List from '../List/List';

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


function WayPointEditor() {

  const [points, setPoints] = useState([]);

  return (
    <div>
      <InputGroup>
        <Input placeholder="Новая точка маршрута" onKeyPress={event => handleKeyPress.call({points, setPoints}, event)}/>
      </InputGroup>
      <List data={points} onDelete={handleItemDeleteClick.bind({points, setPoints})}/>
    </div>
  );
}

export default WayPointEditor;
