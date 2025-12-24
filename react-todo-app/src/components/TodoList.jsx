import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (!todos || todos.length === 0)
    return <div className="todos-container">No todos yet</div>;

  return (
    <div className="todos-container">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
