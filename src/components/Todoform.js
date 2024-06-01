import React, { useState } from "react";

export default function Todoform({addTodo}) {
  const [value, setValue] = useState("");
    const handleSubmit =e=>{
        e.preventDefault();
        addTodo(value);
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
          
          placeholder="What is the task today?"
          
        />
        <button
          type="submit"
          className="todo-btn"
          
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
