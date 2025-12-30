import { useState } from "react";
export function TodoInput({ addTodo }) {
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
