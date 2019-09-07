import React, { useState } from "react";

const ItemForm = props => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    props.addItem(value);
    setValue("");
  };

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default ItemForm;
