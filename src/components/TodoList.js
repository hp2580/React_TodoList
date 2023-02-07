import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onInsertToggle, onChangeSelected }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onInsertToggle={onInsertToggle}
          onChangeSelected={onChangeSelected}
        />
      ))}
    </>
  );
};

export default TodoList;
