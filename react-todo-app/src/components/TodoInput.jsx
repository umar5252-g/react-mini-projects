import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  function handleAdd() {
    const t = value.trim();
    if (!t) return;
    onAdd(t);
    setValue("");
  }

  return (
    <div>
      <input
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        placeholder="Enter your todo here"
      />
      <button className="save-btn" onClick={handleAdd}>
        Save
      </button>
    </div>
  );
}
