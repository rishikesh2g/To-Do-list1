import React, { useState } from "react";
import "./App.css";
function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");
  function addItem() {
  
    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);
    const newItem = {
      id: currentItem.id,
      value: newText,
    };
    deleteItem(id);
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }
  return (
    <div className="app">
     <div className="header">
     <h1>My Todo List</h1>
     </div>
      <input type="text" placeholder="To-Do item..."value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <div className="button">
      <button class="btn btn-warning" onClick={() => addItem()}>Add</button>
      </div>
  
      <ul>
        {items.map((item) => {
          return (
            <div>
                <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
               <button className="delete-button" onClick={() => deleteItem(item.id)}>❌</button>
              </li>
              {showEdit == item.id ? (
                <div>
                  <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)}/>
                  <button onClick={() => editItem(item.id, updatedText)}> Update</button>
                </div>) : null} </div> );
              })}
      </ul>
    </div>
  );
}
export default App;