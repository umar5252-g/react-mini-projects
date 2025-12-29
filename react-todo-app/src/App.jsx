// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";

function TodoInput({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      {" "}
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your todo here"
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && todoInput.trim()) {
            addTodo(todoInput);
            setTodoInput("");
          }
        }}
      />
      <button
        onClick={() => {
          if (!todoInput.trim()) return;
          addTodo(todoInput);
          setTodoInput("");
        }}
        className="save-btn"
      >
        Save
      </button>
    </>
  );
}

function DisplayTodo({ todos, deleteTodo }) {
  const [editId, setEditId] = useState(null);
  const [editedText, setEditText] = useState("");
  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo">
            {todo.text}
            <div className="edit-btn">
              <button>Edit</button>
            </div>
            <div className="delete-btn">
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
function App() {
  const [todos, setTodos] = useState([
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
  ]);
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
        <DisplayTodo todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
