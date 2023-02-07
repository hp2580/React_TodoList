import React, { useState } from "react";
import "./css/Template.css";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

let nextId = 1;
const Template = ({ todos, setTodos }) => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [selected, setSelected] = useState(null);
  const onInsertToggle = () => {
    if (selected) {
      setSelected(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onInsertTodo = (text) => {
    if (text === undefined || text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
    }
    nextId++;
  };
  const onChangeSelected = (todo) => {
    setSelected(todo);
  };
  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="todoList">
      <div className="title">TodoList</div>
      <div className="listWrap">
        <TodoList
          todos={todos}
          onChangeSelected={onChangeSelected}
          onInsertToggle={onInsertToggle}
        />
      </div>
      {insertToggle && (
        <TodoInsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          selected={selected}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
      <button type="button" className="addTodo" onClick={onInsertToggle}>
        +
      </button>
    </div>
  );
};

export default Template;
