import { useState } from "react";

export function DisplayTodo({ todos, deleteTodo, setTodos }) {
  const [editId, setEditId] = useState(null);
  const [editedText, setEditText] = useState("");

  const saveEdit = (id) => {
    if (!editedText.trim()) return;

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );

    setTodos(updatedTodos);
    setEditId(null);
    setEditText("");
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />

          {editId === todo.id ? (
            <input
              className="edit-input"
              type="text"
              value={editedText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit(todo.id);
                if (e.key === "Escape") {
                  setEditId(null);
                  setEditText("");
                }
              }}
            />
          ) : (
            <span
              className="edited-message"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1,
                color: todo.completed ? "green" : "black",
              }}
            >
              {todo.text}
            </span>
          )}
          {/* EdIt btn */}
          <div className="edit-btn">
            {editId === todo.id ? (
              <button onClick={() => saveEdit(todo.id)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
            )}
          </div>

          {/*  delete button  */}
          <div className="delete-btn">
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
