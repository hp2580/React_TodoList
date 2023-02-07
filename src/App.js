import "./reset.css";
import "./App.css";
import { useState } from "react";
import Template from "./components/Template";

const App = () => {
  const [todos, setTodos] = useState([]);

  return <Template todos={todos} setTodos={setTodos}></Template>;
};

export default App;
