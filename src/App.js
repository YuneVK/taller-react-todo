import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React",
      isCompleted: false
    },
    {
      content: "⚛️ Crear mi primera aplicación",
      isCompleted: false
    },
    {
      content: "🚀 Subirla a GitHub",
      isCompleted: false
    }
  ]);

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isComplete = !newItems[index].isComplete;
    setItems(newItems);
  };

  const addItem = content => {
    const newItems = [...items];
    newItems.unshift({ content: content, isCompleted: false });
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ItemForm addItem={addItem} />
      <ul className="ItemList">
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
    </div>
  );
}

export default App;
