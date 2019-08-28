import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import DragableList  from '../src/components/List/DragableList';

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("DragableList component", () => {
  test("it shows the expected data", () => {
    act(() => {
      ReactDOM.render(<DragableList data={[1,2,3,4,5]} />, container);
    });
    const list = container.getElementsByTagName("ul")[0];
    const listLength = list.getElementsByTagName("li").length;
    expect(listLength).toBe(5);
  });
});