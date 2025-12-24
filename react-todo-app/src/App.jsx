import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("todos");
    if (raw) setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const t = text?.trim();
    if (!t) return;
    const newTodo = { id: Date.now().toString(), text: t, completed: false };
    setTodos((s) => [newTodo, ...s]);
  }

  function toggleTodo(id) {
    setTodos((s) =>
      s.map((td) => (td.id === id ? { ...td, completed: !td.completed } : td))
    );
  }

  function deleteTodo(id) {
    setTodos((s) => s.filter((td) => td.id !== id));
  }

  function editTodo(id, newText) {
    const t = newText?.trim();
    if (!t) return;
    setTodos((s) => s.map((td) => (td.id === id ? { ...td, text: t } : td)));
  }

  return (
    <div className="app-container">
      <h1>TODO APP</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
