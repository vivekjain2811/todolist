import React from "react";
import Show from "./Show";
function List({ myarray }) {
  return (
    <div>
      {myarray.map((list, index) => (
        <Show key={index} list={list} /> // Pass each inner array as list prop
      ))}
    </div>
  );
}
export default List;
