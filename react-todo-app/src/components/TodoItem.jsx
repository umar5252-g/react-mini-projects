import React, { useState, useEffect } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    setText(todo.text);
  }, [todo.text]);

  function saveEdit() {
    const t = text.trim();
    if (!t) return;
    onEdit(todo.id, t);
    setEditing(false);
  }

  return (
    <div className="todo">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flex: 1,
        }}
      >
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {editing ? (
          <input
            className="edit-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
            }}
          />
        ) : (
          <div className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="edit-btn"
          onClick={() => {
            if (editing) saveEdit();
            else setEditing(true);
          }}
        >
          {editing ? "Save" : "Edit"}
        </button>
        <div className="delete-btn">
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
