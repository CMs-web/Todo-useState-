import { useState } from "react";
import ListItem from "./ListItem";

function ListGroup({ todoObj, handleDelete}) {

  return (
    <ul className="listgroup">
      {todoObj.map((li) => (
        <ListItem
          id={li.id}
          text={li.text}
          key={li.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ListGroup;
