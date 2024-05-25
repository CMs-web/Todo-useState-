import { useState } from "react";
import ListGroup from "./ListGroup";

function Form({ todoObj, handleSubmit, handleDelete }) {
  const [input, setInput] = useState("");

  return (
    <form className="input" onSubmit={(ev) => handleSubmit(ev, input, setInput)}>
      <input
        type="text"
        placeholder="Enter Your Text Here"
        required
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <button>Add</button>
      <ListGroup todoObj={todoObj} handleDelete={handleDelete} />
    </form>
  );
}

export default Form;
