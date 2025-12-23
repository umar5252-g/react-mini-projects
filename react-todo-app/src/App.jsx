// import { useEffect, useState } from "react";

function DiplayTodo() {
  return <></>;
}
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
          placeholder="enter yout todo here "
          onChange={() => {}}
        />
        <button onClick={() => {}}>Save</button>
        <button>Delete</button>
        <br />
        <div className="todo's-container">
          <div className="todo">I will study for 8 hours today </div>
          <div className="todo">i will solve 8 question of dsa today</div>
        </div>
      </div>
    </>
  );
}

export default App;
