import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./Components/List";
//basic structure of the todo list app in react i have to make it proper by usig my video knowledge and
//other things also.
function App() {
  const [array, setarray] = useState([]);
  const [value, setvalue] = useState("");
  function changeHandler(event) {
    setvalue(event.target.value);
  }
  function clickHandler() {
    setarray([...array, value]);
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
      <List myarray={array}></List>
    </div>
  );
}
export default App;
