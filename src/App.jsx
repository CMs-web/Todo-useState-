import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [todoObj, setTodoObj] = useState([
    {
      id: crypto.randomUUID(),
      text: "Code",
      isDone: false,
    },
  ]);


const handleSubmit = (ev, input, setInput)=>{
  ev.preventDefault();
  setTodoObj([...todoObj,{
    id: crypto.randomUUID(),
    text: input,
    isDone: false,
  },])
  setInput('')
}

const handleDelete = (id) => {
  let remainTodo = todoObj.filter(obj => obj.id!==id ? obj :null)
  setTodoObj(remainTodo)
}


  return (
    <div className="container">
      <Form todoObj = {todoObj} handleSubmit={handleSubmit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
