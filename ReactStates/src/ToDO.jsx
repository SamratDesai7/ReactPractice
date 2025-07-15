import React, { useState } from "react";
function ToDO() {
  let [task, setTask] = useState([]);
  let [newTask, setNewTask] = useState("");
  let addTask = () => {
    setTask([...task, newTask]);
  };
  let handleOnChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <>
      <input type="text" value={newTask} onChange={handleOnChange} />{" "}
      <button onClick={addTask}>Add</button>
      <h3>To Do Tasks</h3>
      <hr />
      <ul>
        {task.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDO;
