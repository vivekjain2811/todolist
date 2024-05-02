import React from "react";
import Show from "./Show";
function List({ myarray }) {
  return (
    <div>
      <Show list={myarray}></Show>
    </div>
  );
}
export default List;
