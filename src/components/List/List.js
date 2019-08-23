import React, { useState } from 'react';
import { Button } from "reactstrap";

function List({data, onDelete}) {
  return (
    <ul>
      {
        data.map((item, index) => (
          <li key={index}>
            <div>{item}</div>
            <Button color="primary" onClick={() => onDelete(index)}>Close</Button>
          </li>
        ))
      }
    </ul>
  );
}

export default List;