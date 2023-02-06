import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </>
  );
};

export default TodoList;
