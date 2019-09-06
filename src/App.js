import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([
    {
      content: "Tarea 1",
      isComplete: false
    },
    {
      content: "Tarea 2",
      isComplete: false
    },
    {
      content: "Tarea 3",
      isComplete: false
    }
  ]);

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isComplete = !newItems[index].isComplete;
    console.log(newItems[index].isComplete);
    console.log("complete");
    setItems(newItems);
  };

  const addItem = content => {
    const newItems = [...items, { content: content }];
    setItems(newItems);
  };

  return (
    <div className="App">
      <ul className="ListItems">
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            content={item.content}
            completeItem={completeItem}
            isComplete={item.isComplete}
          />
        ))}
      </ul>
      <ItemForm addItem={addItem} />
    </div>
  );
}

export default App;
