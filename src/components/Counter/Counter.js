import React from "react";
import "./Counter.css";

export const subBtn = document.getElementById("subtractButton");
export const addBtn = document.getElementById("additionButton");
export const cntr = document.getElementById("counter");
export var count = 0;

function Counter() {
  return (
    <div className="Counter">
      <span className="counterBoxItem" id="counter">
        {count}
      </span>
      <div className="buttons">
        <button
          onClick={subCount}
          className="counterBoxItem"
          id="subtractButton"
        >
          -
        </button>
        <button
          onClick={addCount}
          className="counterBoxItem"
          id="additionButton"
        >
          +
        </button>
      </div>
    </div>
  );
}

function addCount() {
  count++;
  cntr.innerHTML = count;
}

function subCount() {
  count--;
  cntr.innerHTML = count;
}

export default Counter;
