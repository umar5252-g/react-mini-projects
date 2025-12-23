// import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useEffect(() => {}, []);

  return (
    <>
      <div className="app-container">
        <h1>TODO APP</h1>
        <br />
        <input
          className="todo-input"
          type="text"
          placeholder="Enter your todo here"
          onChange={() => {}}
        />
        <button onClick={() => {}} className="save-btn">
          Save
        </button>
        <br />

        <br />
        <div className="todos-container">
          <div className="todo">
            I will study for 8 hours today{" "}
            <div className="delete-btn">
              <button>Delete</button>
            </div>
          </div>
          <div className="todo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            laudantium itaque quisquam rerum nisi suscipit mollitia, dolores
            enim sit officia tempore cupiditate, hic dolor quos facilis
            quibusdam asperiores nulla voluptatem.
            <div className="delete-btn">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
