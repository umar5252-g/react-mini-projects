import React, { useState } from "react";

export default function CountryInput({ handleSearch }) {
  const [q, setQ] = useState("");

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        const trimmed = q.trim();
        if (!trimmed) return;
        handleSearch(trimmed);
      }}
    >
      <input
        className="search-input"
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter country name "
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}
