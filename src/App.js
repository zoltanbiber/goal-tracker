import "./App.css";
import { useState } from "react";
import Goal from "./components/Goal";
import DateComponent from "./components/Date";
import Todos from "./components/Todos";

function App() {
  const initialData = {
    goal: "",
    date: new Date().toISOString().substring(0, 10),
    todos: [],
  };

  const [data, setData] = useState(initialData);

  const todoRemoveHandler = (todoItem) => {
    setData((prevState) => {
      return {
        ...prevState,
        todos: [...prevState.todos.filter((item) => item !== todoItem)],
      };
    });
  };

  const goalUpdateHandler = (value, field) => {
    setData((prevState) => {
      if (field === "todos") {
        return {
          ...prevState,
          todos: [...prevState.todos, value],
        };
      }
      return {
        ...prevState,
        [`${field}`]: value,
      };
    });
  };

  return (
    <div className="App">
      <h1 className="appHeader">Goal Tracker</h1>
      <Goal goal={data.goal} updateHandler={goalUpdateHandler} />
      <DateComponent date={data.date} updateHandler={goalUpdateHandler} />
      <Todos
        todos={data.todos}
        updateHandler={goalUpdateHandler}
        removeHandler={todoRemoveHandler}
      />
    </div>
  );
}

export default App;
