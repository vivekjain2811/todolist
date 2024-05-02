import React from "react";
function Show({ list }) {
  return (
    <div>
      {list.map((element, index) => (
        <div className="flex items-center justify-center" key={index}>
          <div className="w-1/3 flex justify-between">
            <div>{element}</div>
            <div>edit</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Show;
