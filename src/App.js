import "./reset.css";
import "./App.css";
import { useState } from "react";
import Template from "./components/Template";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "할 일1" },
    { id: 2, text: "할 일2" },
    { id: 3, text: "할 일3" },
  ]);
  return (
    <>
      <Template todos={todos}></Template>
    </>
  );
};

export default App;
