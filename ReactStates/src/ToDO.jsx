import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function ToDO() {
  let [task, setTask] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");
  let addTask = () => {
    if (!newTask.trim()) return;
    setTask([...task, { task: newTask, id: uuidv4() }]);
    setNewTask("");
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
        {task.map((el) => (
          <li key={el.id}>{el.task}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDO;
