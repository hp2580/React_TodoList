import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ todo, onChangeSelected, onInsertToggle }) => {
  const { id, text } = todo;

  return (
    <div className="todoItem">
      <div
        key={id}
        onClick={() => {
          onChangeSelected(todo);
          onInsertToggle();
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TodoItem;
