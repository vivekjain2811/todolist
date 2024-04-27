import logo from "./logo.svg";
import "./App.css";
import Label from "./Components/Label";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("");
  const [set, value] = useState("");
  const [btnclclk, setbtnclk] = useState(false);
  function changeHandler(event) {
    setstate(event.target.value);
  }
  function clickHandler() {
    value(state);
    setbtnclk(true);
  }
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl">TO DO LIST</h1>
        <div className="flex flex-row  gap-4 justify-center ">
          <input
            onChange={changeHandler}
            type="text"
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={clickHandler}
            className="rounded-full p-4 text-black bg-green-500 "
          >
            +
          </button>
        </div>
      </div>

      {btnclclk ? <Label set={set}></Label> : <></>}
    </div>
  );
}

export default App;
