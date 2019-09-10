import React, { useState } from "react";

const ItemForm = props => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    props.addItem(value);
    setValue("");

    return false;
  };

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introduce una tarea"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default ItemForm;
