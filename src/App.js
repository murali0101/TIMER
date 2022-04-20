import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const start = useRef(null);
  const end = useRef(null);
  const x = useRef(null);

  function startTimer() {
    x.current = setInterval(() => {
      setCounter((p) => {
        return p + 1;
      });
    }, 1000);
  }

  console.log(start, end, counter);
  if (counter == end.current) {
    clearInterval(x.current);
  }

  return (
    <div>
      <div>{counter}</div>

      <input type={"number"} id="s" />
      <input type={"number"} id="e" />

      <button
        onClick={() => {
          start.current = +document.getElementById("s").value;
          end.current = +document.getElementById("e").value;
          console.log(typeof start.current);
          setCounter(start.current);
          startTimer();
        }}
      >
        start timer
      </button>
    </div>
  );
}

export default App;
