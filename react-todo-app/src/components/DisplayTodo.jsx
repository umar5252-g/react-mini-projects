import { useState } from "react";

export function DisplayTodo({ todos, deleteTodo, setTodos }) {
  const [editId, setEditId] = useState(null);
  const [editedText, setEditText] = useState("");

  const saveEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editedText };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo">
            {editId === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(event) => {
                  setEditText(event.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (!editedText.trim()) return;
                    saveEdit(todo.id);
                  } else if (e.key === "Escape") {
                    setEditId(null);
                    setEditText("");
                  }
                }}
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <div className="edit-btn">
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
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
