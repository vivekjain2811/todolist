import { fireEvent } from "@testing-library/react";
import React, { useState } from "react";

function Label(props) {
  const [value, set] = useState(props.set);
  function clickHandler() {
    set(" ");
  }
  return (
    <div>
      <div className="flex  flex-row w-64 h-24 bg-slate-400  mx-auto">
        <p>{value}</p>
        <button
          onClick={clickHandler}
          className="bg-black text-white border border-blue-300  p-2 "
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default Label;
