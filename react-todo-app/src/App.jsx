// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
function TodoInput({ todos, setTodos }) {
  const [inputTodo, setInputTodo] = useState("hello guys how can i help you ");

  return (
    <>
      {" "}
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your todo here"
        value={inputTodo}
        onChange={(event) => {
          setInputTodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodo = inputTodo;
          setTodos([...todos, newTodo]);
          setInputTodo("");
          // console.log(todos);
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
    <div>
      <div className="todos-container">
        {todos.map((item, index) => {
          return (
            <div key={index} className="todo">
              {item}
              <div className="delete-btn">
                <button
                  onClick={() => {
                    const idxToDelete = index;
                    const newTodos = todos.filter(
                      (todo, i) => i !== idxToDelete
                    );
                    setTodos(newTodos);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const OddNum = nums.filter((num) => {
    return num % 2 !== 0;
  });
  console.log(OddNum);
  const numbers = [1, 2, 3, 4, 5, 6];
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  console.log(oddNumbers); // [1, 3, 5]

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
