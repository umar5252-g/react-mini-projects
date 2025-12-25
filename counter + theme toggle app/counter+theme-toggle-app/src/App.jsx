import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={toggle === true ? "app-container light" : "app-container dark"}
    >
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
        <button onClick={() => setToggle(!toggle)}>
          {toggle === true ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </div>
  );
}

export default App;
