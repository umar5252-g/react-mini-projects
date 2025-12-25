import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <div className="app-container">
      <h1>Count + Theme Toggle App</h1>
      <br />
      <div className="count-container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count {count}
        </button>
      </div>
      <br />
      <div className="toggle-container">
        <button
          className={toggle === true ? `light` : "dark"}
          onClick={() => setToggle(!toggle)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
