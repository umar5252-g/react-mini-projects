// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";

function TodoInput({ todos, setTodos }) {
  const [todoInput, setTodoInput] = useState("");
  const addTodo = () => {
    const newTodo = todoInput;
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };
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
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button onClick={addTodo} className="save-btn">
        Save
      </button>
    </>
  );
}

function DisplayTodo({ todos, setTodos }) {
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
                  const newTodo = todos.filter((t) => t.id !== todo.id);
                  setTodos(newTodo);
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

  return (
    <>
      <div className="app-container">
        <h1>TODO APP</h1>
        <br />
        <TodoInput todos={todos} setTodos={setTodos} />
        <DisplayTodo todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
