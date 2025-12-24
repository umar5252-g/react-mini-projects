// import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useEffect(() => {}, []);
  function TodoInput() {
    return (
      <>
        {" "}
        <input
          className="todo-input"
          type="text"
          placeholder="Enter your todo here"
          onChange={() => {}}
        />
        <button onClick={() => {}} className="save-btn">
          Save
        </button>
      </>
    );
  }
  function DisplayTodo() {
    return (
      <>
        <div className="todos-container">
          <div className="todo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            obcaecati quisquam atque eos voluptatum! Porro consequuntur at illum
            animi. Doloremque impedit saepe nisi et! Voluptates autem nulla
            mollitia laboriosam culpa.
            <div className="delete-btn">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="app-container">
        <h1>TODO APP</h1>
        <br />
        <TodoInput />
        <DisplayTodo />
      </div>
    </>
  );
}

export default App;
