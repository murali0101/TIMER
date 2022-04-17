import { useState, useEffect } from "react";
import TodoList from "./todolist";
import "../App.css";

function Todo() {
  const [track, setTrack] = useState();
  const [data, setData] = useState([]);

  return (
    <div className=" center flex">
    
      <div  className="center">
      <input
        type="text" className="white" placeholder="Write Something"
        onChange={(e) => {
          setTrack(e.target.value);
        }}
      ></input>
      <button className="white"
        onClick={() => {
          setData([...data, track]);
        }}
      >
        +
      </button>
      </div>
      <TodoList val={data} />
    </div>
  );
}
export default Todo;
