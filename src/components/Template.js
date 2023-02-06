import React from "react";
import TodoList from "./TodoList";

const Template = ({ todos }) => {
  return (
    <>
      <div>오늘의 할 일({todos.length})</div>
      <TodoList todos={todos}></TodoList>
    </>
  );
};

export default Template;
