// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";

function TodoInput({ todos, setTodos }) {
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
      />
      <button
        onClick={() => {
          const newTodo = todoInput;
          setTodos([...todos, newTodo]);
          setTodoInput("");
        }}
        className="save-btn"
      >
        Save
      </button>
    </>
  );
}

function DisplayTodo({ todos, setTodos }) {
  return (
    <div className="todos-container">
      {todos.map((todo, idx) => {
        return (
          <div key={idx} className="todo">
            {todo}
            <div className="delete-btn">
              <button
                onClick={() => {
                  const deleteIdx = idx;
                  const newTodo = todos.filter((todo, i) => i !== deleteIdx);
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
  const [todos, setTodos] = useState([]);

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
