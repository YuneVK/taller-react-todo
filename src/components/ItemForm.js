import React, { useState } from "react";

const ItemForm = props => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;

    props.addItem(value);
    setValue("");
  };

  return (
    <form action="javascript:;" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default ItemForm;
