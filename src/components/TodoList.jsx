//Todo List Whole CRUD operations
import React, { useState } from "react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodoItem = (item, key) => {
    console.log("Added", item, key);
    setTodoItems([...todoItems, { item: item, key: key }]);
  };

  const handleChangeInputTodo = (e) => {
    setTodoItem(e.target.value);
  };

  const handleDeleteTodoListItem = (key) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item, index) => item.key !== key)
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Plan Your Day</h1>
      <div style={{ display: "flex" }}>
        <input type="text" onChange={handleChangeInputTodo} />
        <button
          onClick={() => {
            handleAddTodoItem(todoItem, todoItems?.length + 1);
          }}
        >
          Add
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todoItems?.map((item, index) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <span style={{ margin: "10px" }}>{item.item}</span>
            <button onClick={() => handleDeleteTodoListItem(item.key)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
