import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  let display;

  return (
    <div className="app-containers">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <button
          onClick={() => {
            display = input;
            setInput("");
          }}
        >
          Search
        </button>
      </div>
      <div className="weather-infor">{display}</div>
    </div>
  );
}

export default App;
