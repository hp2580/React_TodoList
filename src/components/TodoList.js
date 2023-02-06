import React from "react";

const TodoList = ({ todos }) => {
  return todos.map((todo) => <div key={todo.id}>{todo.text}</div>);
};

export default TodoList;
