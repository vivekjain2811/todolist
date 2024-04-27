import React from "react";
function Main(props) {
  return (
    <div className="">
      <div className="w-24 h-12 bg-orange-500 ">
        <p className="text-black">{props.onClick}</p>
        <button className="flex justify-between text-black"> delete</button>
      </div>
    </div>
  );
}

export default Main;
