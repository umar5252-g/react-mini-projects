// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput.jsx";
import { DisplayTodo } from "./components/DisplayTodo.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            text: "Complete homeWork",
            completed: false,
          },
          {
            id: 2,
            text: "Buy milk",
            completed: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  function deleteTodo(id) {
    const newTodo = todos.filter((t) => t.id !== id);
    setTodos(newTodo);
  }

  return (
    <>
      <div className="app-container">
        <h1>TODO APP</h1>
        <br />
        <TodoInput addTodo={addTodo} />
        <DisplayTodo
          todos={todos}
          deleteTodo={deleteTodo}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
