import { useState } from "react";

function ListItem({ id, text, handleDelete }) {
  const [isTrue, setIsTrue] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text)


  const handlDone = () => {
    if(isEdit){
        setIsEdit(!isEdit)
        return <li className={isTrue ? "todoText" : null}>{value}</li>
    }else{
      setIsTrue(!isTrue)
    }
  }

  return (
    <div className="listitem">
      {isEdit ? (
        <input className="editInput" value={value} onChange={(ev)=>setValue(ev.target.value)} onSubmit={(ev)=>handleSubmit(ev)}/>
      ) : (
        <li className={isTrue ? "todoText" : null}>{value}</li>
      )}
      <div className="icon">
        <i
          className={!isEdit&&"fa-solid fa-pen-to-square"}
          onClick={()=>setIsEdit(!isEdit)}
        ></i>
        <i className="fa-solid fa-trash" onClick={() => handleDelete(id)}></i>
        <i className="fa-solid fa-check" onClick={handlDone}></i>
      </div>
    </div>
  );
}

export default ListItem;
