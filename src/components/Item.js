import React from "react";

const Item = props => {
  return (
    <li
      className={`Item ${props.isComplete ? "completed" : ""}`}
      onClick={() => props.completeItem(props.index)}
    >
      {props.content}
    </li>
  );
};

export default Item;
