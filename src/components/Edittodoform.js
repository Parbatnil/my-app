import React, { useState } from "react";

export default function Edittodoform({editTodo,task}) {
  const [value, setValue] = useState(task.task);
    const handleSubmit =e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
  return (
    <div>
      <form  className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          
          placeholder="Update Tasks"
          
        />
        <button
          type="submit"
          className="todo-btn"
          
        >
          Update Task
        </button>
      </form>
    </div>
  );
}
